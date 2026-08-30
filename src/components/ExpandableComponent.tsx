import { useState } from 'react';

function ExpandableComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-10 text-left hover:cursor-pointer "
            >
                <span className="">
                    Graphic Design Projects
                </span>
                <span className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    
                </span>

            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                {/* The overflow-hidden is required for the grid trick to work */}
                <div className="overflow-hidden">
                
                {/* Actual content goes here */}
                <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                    This is the hidden content! It smoothly slides down when you click the frame. You can put text, images, or even other components inside here.
                </div>
                
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-10 text-left hover:cursor-pointer "
            >
                <span className="">
                    Software Development Projects
                </span>
                <span className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    
                </span>

            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                {/* The overflow-hidden is required for the grid trick to work */}
                <div className="overflow-hidden">
                
                {/* Actual content goes here */}
                <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                    This is the hidden content! It smoothly slides down when you click the frame. You can put text, images, or even other components inside here.
                </div>
                
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpandableComponent;