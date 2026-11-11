import { z } from "zod";

// Détecte http://, https://, www., les balises HTML et les extensions de domaines courantes
const urlRegex = /(https?:\/\/|www\.|<a\s|href=|[a-zA-Z0-9-]+\.(com|fr|net|org|io|ru|xyz|info|biz|co|me|click|top|link|site|online|shop|club|pro|dev|app|bit|ly)\b)/i;

const noUrlMessage = "Les liens internet ne sont pas autorisés.";

export const EstimateSchema = z.object({
	name: z
		.string()
		.min(2, "Le nom doit contenir au moins 2 caractères")
		.max(100, "Le nom est trop long")
		.refine((val) => !urlRegex.test(val), { message: noUrlMessage }),
	email: z.email("Email invalide"),
	phoneNumber: z
		.string()
		.min(10, "Veuillez entrer un numéro valide")
		.regex(/^\+?[0-9\s\-()]{7,15}$/, "Numéro de téléphone invalide"),
	address: z
		.string()
		.max(200, "L'adresse est trop longue")
		.refine((val) => !urlRegex.test(val), { message: noUrlMessage })
		.optional()
		.or(z.literal("")),
	postalCode: z
		.string()
		.regex(/^[0-9]{5}$/, "Code postal invalide (5 chiffres)")
		.optional()
		.or(z.literal("")),
	city: z
		.string()
		.max(100, "Le nom de la ville est trop long")
		.refine((val) => !urlRegex.test(val), { message: noUrlMessage })
		.optional()
		.or(z.literal("")),
	service: z.enum(
		["deratisation", "desinsectisation", "desinfection", "autre"],
		{ message: "Veuillez choisir un service valide" }
	),
	message: z
		.string()
		.min(10, "Le message doit contenir au moins 10 caractères")
		.max(1500, "Le message ne peut pas dépasser 1500 caractères")
		.refine((val) => !urlRegex.test(val), {
			message: "Pour des raisons de sécurité, les liens ne sont pas autorisés dans le message.",
		}),
	whatsapp: z.boolean(),
	// Champ piège (Honeypot) : doit toujours rester vide
	honeypot: z.string().max(0, "Bot détecté").optional().or(z.literal("")),
});

export type IEstimate = z.infer<typeof EstimateSchema>;
