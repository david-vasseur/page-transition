import { div } from 'framer-motion/client';
import { IconType } from 'react-icons';

interface IFaqElement {
    icon?: IconType;
    label: string;
}

function FaqElement({ icon, label }: IFaqElement) {

    const Icon = icon;

    return (
        <div  className="absolute flex justify-center items-center sticky-card z-5 h-24 w-full">
            <div className={`w-[90%] lg:max-w-xl flex gap-8 items-center justify-evenly p-8 rounded-2xl ${Icon ? "bg-linear-to-r from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl" : ""}`}>
                {Icon && 
                <div className="bg-linear-to-br from-orange-600 to-red-800 p-4 rounded-xl">
                    <Icon className="text-gray-300 w-6 h-6 shrink-0" />
                </div>
                }
                <p className={`text-gray-300 ${Icon ? "font-semibold" : "font-bold"}`}>{label}</p>
            </div>            
        </div>
    )
}

export default FaqElement;