import { NextResponse } from "next/server";
import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST() {
    try {
        const headersList = await headers();
        
        // 1. Détection automatique Mobile vs Desktop via le User-Agent
        const userAgent = headersList.get("user-agent") || "";
        const isMobile = /android|iphone|ipad|ipod|mobile/i.test(userAgent);
        const deviceType = isMobile ? "MOBILE" : "DESKTOP";
        
        // 2. Récupération des infos réseau / géo
        const forwardedFor = headersList.get("x-forwarded-for");
        const clientIp = forwardedFor ? forwardedFor.split(",")[0] : headersList.get("x-real-ip") || "Inconnue";
        const city = headersList.get("x-vercel-ip-city") ? decodeURIComponent(headersList.get("x-vercel-ip-city")!) : "Ville non détectée";
        const region = headersList.get("x-vercel-ip-region") || "";
        const country = headersList.get("x-vercel-ip-country") || "FR";

        // 3. Envoi de l'e-mail avec le sujet dynamique
        await resend.emails.send({
            from: "contact@gvs3d.fr",  
            to: "p5y4@icloud.com",
            subject: `📞 Alerte : CTA ${deviceType} d'appel !`,
            html: `
                <div style="background-color: black; color: white; padding: 24px; border-radius: 8px; font-family: sans-serif;">
                    <h1 style="color: #ea580c;">Coup de fil en vue (${deviceType}) !</h1>
                    <p style="font-size: 16px;">
                        Un visiteur vient de <strong>cliquer sur ton numéro de téléphone</strong> (06 58 94 20 67) depuis un appareil <strong>${deviceType.toLowerCase()}</strong>.
                    </p>
                    
                    <div style="background-color: #111; padding: 12px; border-radius: 6px; margin: 16px 0; font-size: 14px;">
                        <strong>Informations techniques :</strong>
                        <ul style="padding-left: 20px; margin-top: 6px; color: #ccc;">
                            <li>📍 Localisation : <strong>${city} ${region ? `(${region})` : ""} - ${country}</strong></li>
                            <li>🌐 Adresse IP : ${clientIp}</li>
                        </ul>
                    </div>

                    <p style="font-size: 14px; color: #888; margin-top: 20px;">
                        Prépare ton téléphone ! 📱
                    </p>
                </div>
            `
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erreur tracking téléphone:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}