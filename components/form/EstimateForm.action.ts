"use server";

import { Resend } from "resend";
import IEstimate from "@/type/estimate";
import MyEmail from "../ui/Email";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(value: IEstimate) {
	try {
		const data = await resend.emails.send({
		from: "contact@david-vasseur.fr",  
		to: "g.v.s.3dpro@gmail.com",
		subject: "Demande de Devis",
		react: MyEmail(value)
		});
		return { success: true, message: `Merci.</br> Votre demande a bien été prise en compte.</br> Nous faisons le nécéssaire pour vous recontacter dans les plus bref délais.` }
	} catch (error) {
		console.log(error);
		return { success: false, message: "Désolé.</br> Une erreur s'est produite, merci de réessayer votre demande." }
	}
}

