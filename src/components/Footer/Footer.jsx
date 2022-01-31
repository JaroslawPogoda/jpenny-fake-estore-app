import React from 'react';
import './Footer.css'
export default function Footer(){
    const date= new Date().getFullYear();
    return(
        <div className="Footer">
            <p className="footer-text"><small>© copyright Jaroslaw Pogoda {date}</small></p>
        </div>
    )
}