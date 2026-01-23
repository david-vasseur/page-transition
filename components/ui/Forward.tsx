import React from 'react';
import { IconType } from 'react-icons';

interface IForward {
  icon?: IconType;
  title: string;    
  label?: string;      
  bgColor?: string;    
  textColor?: string;  
  borderColor?: string;
}

function Forward({
    icon,
    title,
    label,
    bgColor,
    textColor = "text-orange-500",
    borderColor,
}: IForward) {

    const Icon = icon;

    return (
        <div className="flex flex-col items-center mb-6 max-w-lg"> 
            <div className={`flex justify-center items-center aspect-square w-24 ${bgColor} ${borderColor} rounded-xl`}>
                {Icon && <Icon className={`w-5 h-5 mr-2 ${textColor}`} />}
                <span className={`font-black text-3xl lg:text-5xl ${textColor}`}>{title}</span>
            </div>
            {label && <span className="text-sm text-gray-400 mb-1">{label}</span>}
        </div>
    );
}

export default Forward;

