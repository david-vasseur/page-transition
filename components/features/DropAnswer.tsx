"use client"

import { ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

function DropAnswer({ question, answer }: { question: string, answer: string }) {
    const [isDrop, setIsDrop] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isDrop ? contentRef.current.scrollHeight : 0);
        }
    }, [isDrop]);

    return (
        <div className="my-3 w-[90vw] lg:w-2/5 mx-auto">
            <div className="bg-gradient-to-br from-gray-700/50 to-black backdrop-blur-3xl rounded-xl shadow-amber-900 shadow-sm p-5 hover:shadow-xl transition-shadow duration-300">
                {/* Question */}
                <button
                    onClick={() => setIsDrop(!isDrop)}
                    className="w-full flex justify-between items-center cursor-pointer group"
                >
                    <h2 className="font-bold text-lg lg:text-xl text-gray-50 group-hover:text-orange-500 transition-colors duration-300 font-lato">
                        {question}
                    </h2>
                    <ChevronDown
                        className={`shrink-0 w-6 h-6 text-orange-500 transition-transform duration-500 ${isDrop ? "rotate-180" : "rotate-0"} group-hover:scale-110`}
                    />
                </button>

                {/* Réponse */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: height }}
                >
                    <div
                        ref={contentRef}
                        className="pt-3 text-justify text-gray-400 font-semibold leading-relaxed"
                    >
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropAnswer;
