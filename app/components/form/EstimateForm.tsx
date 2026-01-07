"use client"

import { motion } from 'framer-motion';
import { useForm } from "@tanstack/react-form"
import { Send } from "lucide-react";
import { sendEmail } from "./EstimateForm.action";
import { useModalStore } from "@/app/lib/stores/modalStore";
import { EstimateSchema, IEstimate } from '@/app/schema/estimateSchema';

export const EstimateForm = () => {

    const { openModal } = useModalStore();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            service: "",
            message: "",
            whatsapp: false
        } as IEstimate,
        validators: {
            onChange: EstimateSchema,
        },
        onSubmit: async ({ value }) => {
            console.log(value);
            
            const response = await sendEmail(value);
            
            if (response.success) {
                openModal(<p
                    className="text-center"
                    dangerouslySetInnerHTML={{ __html: response.message }}
                />)
            } else {
                openModal(<p
                    className="text-center"
                    dangerouslySetInnerHTML={{ __html: response.message }}
                />)
            }
        },
    })


    return (
        <form 
            className="space-y-4"
            onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
            
            <form.Field
                name="name">
                {({ state, handleBlur, handleChange }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + 1 * 0.1, duration: 0.4 }}
                    >
                        <label className="sr-only">Votre nom</label>
                        <input 
                            aria-invalid={
                                state.meta.errors.length > 0 && state.meta.isTouched
                            }
                            className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-white placeholder-gray-500 placeholder-xs lg:placeholder-base focus:border-orange-500 focus:outline-none transition"
                            placeholder="Nom et prénoms"
                            value={state.value}
                            onBlur={handleBlur}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        {state.meta.errors.length > 0 && state.meta.isTouched ? (
                            <p 
                                className="text-red-500 font-semibold text-xs">
                                    {state.meta.errors[0]?.message}
                            </p>
                        ) : null
                        }
                    </motion.div>
                    
                )}
            </form.Field>

            <form.Field
                name="email">
                {({ state, handleBlur, handleChange }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + 2 * 0.1, duration: 0.4 }}
                    >
                        <label className="sr-only">Votre email</label>
                        <input 
                            aria-invalid={
                                state.meta.errors.length > 0 && state.meta.isTouched
                            }
                            className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                            placeholder="Email"
                            value={state.value}
                            onBlur={handleBlur}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        {state.meta.errors.length > 0 && state.meta.isTouched ? (
                            <p 
                                className="text-red-500 font-semibold text-xs">
                                    {state.meta.errors[0]?.message}
                            </p>
                        ) : null
                        }
                    </motion.div>
                )}
            </form.Field>

            <form.Field
                name="phoneNumber">
                {({ state, handleBlur, handleChange }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + 3 * 0.1, duration: 0.4 }}
                    >
                        <label className="sr-only">Votre téléphone</label>
                        <input 
                            aria-invalid={
                                state.meta.errors.length > 0 && state.meta.isTouched
                            }
                            className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                            placeholder="Numéro de téléphone"
                            value={state.value}
                            onBlur={handleBlur}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        {state.meta.errors.length > 0 && state.meta.isTouched ? (
                            <p 
                                className="text-red-500 font-semibold text-xs">
                                    {state.meta.errors[0]?.message}
                            </p>
                        ) : null
                        }
                    </motion.div>
                )}
            </form.Field>

            <form.Field
                name="service">
                {({ state, handleBlur, handleChange }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.4 }}
                    >
                        <label className="sr-only">Service désiré</label>
                            <select
                                aria-invalid={
                                    state.meta.errors.length > 0 && state.meta.isTouched
                                }
                                value={state.value}
                                onBlur={handleBlur}
                                onChange={(e) => handleChange(e.target.value)}
                                className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-gray-500 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                            >
                                <option value="">Choisissez votre service</option>
                                <option value="Rats">Lutte contre les rats</option>
                                <option value="Guepes/Frelons">Lutte contre les guêpes et frelons</option>
                                <option value="Chenilles/insectes">Lutte contre les chenilles/insectes</option>
                                <option value="Oiseaux">Lutte contre les oiseaux</option>
                                <option value="Rongeurs">Lutte contre les rongeurs</option>
                            </select>
                        {state.meta.errors.length > 0 && state.meta.isTouched ? (
                            <p 
                                className="text-red-500 font-semibold text-xs">
                                    {state.meta.errors[0]?.message}
                            </p>
                        ) : null
                        }
                    </motion.div>
                )}
            </form.Field>
            
            <form.Field
                name="message">
                {({ state, handleBlur, handleChange }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1, duration: 0.4 }}
                    >
                        <label className="sr-only">Votre message</label>
                        <textarea
                        aria-invalid={
                                state.meta.errors.length > 0 && state.meta.isTouched
                            }
                        rows={4} 
                        value={state.value}
                        onBlur={handleBlur}
                        placeholder="Message"
                        onChange={(e) => handleChange(e.target.value)}
                        className="w-full rounded-md border border-gray-700 bg-transparent py-2 px-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                        ></textarea>
                        {state.meta.errors.length > 0 && state.meta.isTouched ? (
                            <p 
                                className="text-red-500 font-semibold text-xs">
                                    {state.meta.errors[0]?.message}
                            </p>
                        ) : null
                        }
                    </motion.div>
                )}
            </form.Field>     

            <form.Field
                name="whatsapp"
            >
            {({ state, handleBlur, handleChange }) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                >
                    <input
                        type="checkbox"
                        aria-invalid={
                                state.meta.errors.length > 0 && state.meta.isTouched
                            }
                        className="border border-gray-700 bg-transparent py-2 px-3 mr-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                        placeholder="Votre Email"
                        checked={state.value}
                        onBlur={handleBlur}
                        onChange={(e) => handleChange(e.target.checked)}
                    />
                    <label className="text-gray-500">Avez vous Whatsapp?</label>
                </motion.div>
            )}
            </form.Field>       

            <form.Subscribe 
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                // eslint-disable-next-line react/no-children-prop
                children={([canSubmit, isSubmitting]) => (
                    <motion.button 
                        type="submit" 
                        disabled={!canSubmit || isSubmitting}
                        className="inline-flex items-center justify-center space-x-2 rounded-md bg-orange-600 px-6 py-3 font-semibold text-black hover:bg-orange-700 transition cursor-pointer"
					    whileHover={{ scale: 1.05 }}
					    whileTap={{ scale: 0.95 }}    
                    >
                    {isSubmitting ? "..." : (
                        <span className="flex items-center">
                            <Send className="mr-2" />
                            Envoyer
                        </span>
                    )}
                </motion.button>
                )}            
            >    
            </form.Subscribe>
        </form>
    )

}

