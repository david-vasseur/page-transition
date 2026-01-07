"use client";

import { X } from "lucide-react";
import ModalPortal from "./ModalPortal";
import { useModalStore } from "@/lib/stores/modalStore";


export default function Modal() {

    const { isOpen, content, closeModal } = useModalStore();

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[1000000]"
                onClick={closeModal}
                >
                <div
                    className="relative z-[1000000] bg-gradient-to-br from-orange-700/50 to-black text-white cursor-default text-base xl:text-xl font-extrabold rounded-md pt-15 lg:pt-20 pb-5 lg:pb-20 px-5 lg:px-10 border-1 border-orange-800 max-w-lg mx-2 sm:mx-4 lg:mx-auto w-full lg:w-2/3 shadow-lg shadow-black/90"
                    onClick={(e) => e.stopPropagation()}
                >
                    <X 
                    className="absolute right-3 top-3 stroke-3 text-orange-400 hover:scale-110 hover:text-red-600 transition-transform duration-300 cursor-pointer" 
                    onClick={closeModal} 
                    />
                    {content}
                </div>
            </div>
        </ModalPortal>
    );
}