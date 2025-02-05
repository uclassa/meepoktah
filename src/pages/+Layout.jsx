import React, { StrictMode } from "react";
import './Layout.css'

export default function Layout({children}) {
    return (
        <StrictMode>
            <div>
                {children}
            </div>
        </StrictMode>
    )
}