"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function trackPhoneClick() {
    try {
        const headersList = await headers();
        
        // 1. Récupération de l'adresse IP du visiteur
        const forwardedFor = headersList.get("x-forwarded-for");
        const clientIp = forwardedFor ? forwardedFor.split(",")[0] : headersList.get("x-real-ip") || "Inconnue";

        // 2. Récupération de la localisation (si hébergé sur Vercel, ces headers sont automatiques)
        const city = headersList.get("x-vercel-ip-city") ? decodeURIComponent(headersList.get("x-vercel-ip-city")!) : "Ville non détectée";
        const region = headersList.get("x-vercel-ip-region") || "";
        const country = headersList.get("x-vercel-ip-country") || "FR";

        // Note : Si tu es hébergé sur un VPS classique (Nginx), tu peux coupler l'IP à une API gratuite (comme ipapi.co) si besoin, mais Vercel le fait tout seul.

        await resend.emails.send({
            from: "contact@gvs3d.fr",  
            to: "p5y4@icloud.com",
            subject: "📞 Alerte : CTA appel gvs3d !",
            html: `
                <div style="background-color: black; color: white; padding: 24px; border-radius: 8px; font-family: sans-serif;">
                    <h1 style="color: #ea580c;">Coup de fil en vue !</h1>
                    <p style="font-size: 16px;">
                        Un visiteur vient de <strong>cliquer sur ton numéro de téléphone</strong> (06 58 94 20 67) depuis le site web.
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
        return { success: true };
    } catch (error) {
        console.error("Erreur tracking téléphone:", error);
        return { success: false };
    }
}