import React from 'react';

function TitleH2({value, className}) {
    return (
        <h2 className={`uppercase font-bold	text-[2.25rem] bg-green-emerald-gradient bg-clip-text text-transparent ${className}`}>
        {value}
        </h2>
    );
}

export default TitleH2;