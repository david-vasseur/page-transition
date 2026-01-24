import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import { IconType } from 'react-icons';


interface ICard {
    id: number;
    title: string;
    icon: IconType;
    description: string;
    features: string[];
    gradient: string;
    bgGradient: string;
    index: number;
}

function ServiceCard({ id, title, icon, description, features, gradient, bgGradient, index }: ICard) {

    const Icon = icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const shineRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        if (cardRef.current) {
            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 1
                },
                opacity: 0,
                yPercent: 30,
                xPercent: index % 2 === 0 ? -50 : 50, 
                ease: "power1.in",
            })
        }

    });

    useGSAP(() => {

        if (shineRef.current) {
            gsap.from(shineRef.current, {
                scrollTrigger: {
                    trigger: shineRef.current,
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 1
                },
                opacity: 0.5,
                x: 100, 
                ease: "power1.inOut",
            })
        }

    })

    useGSAP(() => {

        if (glowRef.current) {
            gsap.to(glowRef.current, {
                scrollTrigger: {
                    trigger: glowRef.current,
                    start: "top 75%",
                    end: "top 45%",
                    scrub: 1,
                },
                x: "100%",
            });
        }

    })

    return (
        <div
            id={id.toString()}
            ref={cardRef}
            className="relative group cursor-pointer will-change-transform"
            style={{ perspective: '1000px' }}
        >
            {/* Decorative corner cuts */}
            <div className="relative bg-linear-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-orange-600/50"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
                    }}
            >
                {/* Shine effect */}
                <div ref={shineRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full" />
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${bgGradient} opacity-50`} />
                
                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl ${gradient} opacity-20`}
                        style={{
                            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                        }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${gradient} mb-6 shadow-lg`}>
                        <Icon className="service-icon w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black mb-3">{title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 mr-2 text-orange-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <button className={`relative w-full bg-linear-to-r ${gradient} hover:shadow-lg hover:shadow-orange-600/30 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center group overflow-hidden`}>
                        En savoir plus
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        <div ref={glowRef} className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-100 will-change-transform" />
                    </button>
                </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute -top-3 -right-3 bg-linear-to-br ${gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                24/7
            </div>
        </div>
    )
}

export default ServiceCard;