import React from "react";


export const Section = ({titile, description, children}) => {
    return (
        <div>
            <h2>{titile}</h2>
            <p>{description}</p>


            {children}
        </div>
    );
};