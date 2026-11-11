"use server";

import { Resend } from "resend";
import { EstimateSchema, IEstimate } from "@/schema/estimateSchema";
import MyEmail from "../ui/Email";
import ClientEmail from "../ui/ClientEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(value: IEstimate) {
    try {
        // 1. Piège Honeypot : si rempli par un robot, on renvoie un faux succès sans envoyer d'email
        if (value.honeypot && value.honeypot.length > 0) {
            return {
                success: true,
                message: "Votre demande a bien été prise en compte."
            };
        }

        // 2. Validation stricte du schéma côté serveur (bloque les URL et les appels directs)
        const parsed = EstimateSchema.safeParse(value);

        if (!parsed.success) {
            return {
                success: false,
                message: "Données invalides : vérifiez vos champs (les liens internet sont interdits)."
            };
        }

        const cleanData = parsed.data;

        // 3. Envoi de l'email à l'administrateur avec les données validées
        await resend.emails.send({
            from: "contact@gvs3d.fr",  
            to: "g.v.s.3dpro@gmail.com",
            subject: "Nouvelle Demande de Devis",
            react: MyEmail(cleanData)
        });

        // 4. Envoi de la confirmation au client
        await resend.emails.send({
            from: "contact@gvs3d.fr",  
            to: cleanData.email,
            subject: "Confirmation de votre demande - GVS 3D",
            react: ClientEmail(cleanData)
        });

        return { 
            success: true, 
            message: "Merci. Votre demande a bien été prise en compte. Nous faisons le nécessaire pour vous recontacter dans les plus brefs délais." 
        };
    } catch (error) {
        console.error(error);
        return { 
            success: false, 
            message: "Désolé, une erreur s'est produite. Merci de réessayer votre demande." 
        };
    }
}
