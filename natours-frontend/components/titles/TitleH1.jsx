import React from 'react';

function TitleH1({value, className}) {
    return (
        <h1 className={`uppercase font-bold	text-[3rem] bg-green-emerald-gradient bg-clip-text text-transparent ${className}`}>
        {value}
        </h1>
    );
}

export default TitleH1;