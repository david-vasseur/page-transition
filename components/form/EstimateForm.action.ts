"use server";

import { Resend } from "resend";
import { IEstimate } from "@/schema/estimateSchema";
import MyEmail from "../ui/Email";
import ClientEmail from "../ui/ClientEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(value: IEstimate) {
    try {
        
        await resend.emails.send({
            from: "contact@gvs3d.fr",  
            to: "g.v.s.3dpro@gmail.com",
            subject: "Nouvelle Demande de Devis",
            react: MyEmail(value)
        });

        
        await resend.emails.send({
            from: "contact@gvs3d.fr",  
            to: value.email,
            subject: "Confirmation de votre demande - GVS 3D",
            react: ClientEmail(value)
        });

        return { 
            success: true, 
            message: `Merci.</br> Votre demande a bien été prise en compte.</br> Nous faisons le nécessaire pour vous recontacter dans les plus brefs délais.` 
        }
    } catch (error) {
        console.log(error);
        return { 
            success: false, 
            message: `Désolé.</br> Une erreur s'est produite, merci de réessayer votre demande.` 
        }
    }
}