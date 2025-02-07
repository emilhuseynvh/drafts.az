import React, { useState } from 'react';


const Radio: React.FC = () => {
    const [radio, setRadio] = useState(false)
    
    return (
        <div onClick={() => setRadio(!radio)} className="inline-flex items-center cursor-pointer">
            <div className={`relative w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 rounded-full peer ${radio && 'after:translate-x-full'} rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all ${radio && 'bg-primary'}`}></div>
        </div>
    );
};

export default Radio;