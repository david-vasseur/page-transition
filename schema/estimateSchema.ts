import { z } from "zod";

export const EstimateSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phoneNumber: z
    .string()
    .min(10, "Veuillez entrer un numéro valide")
    .regex(/^\+?[0-9\s\-()]{7,15}$/, "Numéro de téléphone invalide"),
  address: z.string().optional().or(z.literal("")),
  postalCode: z
    .string()
    .regex(/^[0-9]{5}$/, "Code postal invalide (5 chiffres)")
    .optional()
    .or(z.literal("")), // <- Nouveau champ code postal
  service: z.string().min(2, "Le service doit contenir au moins 2 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  whatsapp: z.boolean()
});

export type IEstimate = z.infer<typeof EstimateSchema>;