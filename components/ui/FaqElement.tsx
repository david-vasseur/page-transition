import { IconType } from 'react-icons';

interface IFaqElement {
    icon?: IconType;
    label: string;
}

function FaqElement({ icon, label }: IFaqElement) {

    const Icon = icon;

    return (
        <div  className="absolute flex justify-center items-center sticky-card z-5 h-24 w-full">
            <div className="w-[90%] flex gap-8 items-center justify-evenly p-8 rounded-xl bg-linear-to-br from-orange-950/60 to-red-800/60">
                {Icon && <Icon className="text-orange-500 w-6 h-6 shrink-0" />}
                <p className={`text-gray-300 ${Icon ? "font-semibold" : "font-medium"}`}>{label}</p>
            </div>            
        </div>
    )
}

export default FaqElement;