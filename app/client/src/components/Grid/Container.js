import React from "react";

export const Container = ({ fluid, children } => (
    <div ClassName={`container${fluid ? "-fluid" : ""}`}>
        {children}
    </div>
);