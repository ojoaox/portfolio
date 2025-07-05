import React, { useState } from 'react';

const Accordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const accordionButton = document.getElementById('accordion-button');
        const accordionContent = document.getElementById('accordion-content');

        if (
            accordionButton &&
            accordionContent &&
            !accordionButton.contains(event.target as Node) &&
            !accordionContent.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                id="accordion-button"
                onClick={toggleAccordion}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <span className="text-lg text-white">Contato</span>
                <svg
                    className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                id="accordion-content"
                className={`absolute right-0 mt-2 w-48 bg-neutral-700 rounded-lg shadow-lg py-2 ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <a
                    href="mailto:souzajoaovictor555@gmail.com"
                    target="_blank"
                    className="block px-4 py-2 hover:bg-neutral-600 text-white"
                >
                    Email
                </a>
                <a
                    href="https://github.com/ojoaox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-neutral-600 text-white"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/ojoaox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-neutral-600 text-white"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Accordion;