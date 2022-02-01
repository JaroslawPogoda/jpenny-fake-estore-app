import React from 'react';
import './Footer.css'
import {DiGithubFull} from 'react-icons/di'
import {SiLinkedin} from 'react-icons/si'
export default function Footer(){
    const date= new Date().getFullYear();
    return(
        <div className="Footer">
            <p> Want to see more check out my <a href="https://github.com/JaroslawPogoda"><DiGithubFull className="gitIcone"/></a> or check out my <a href="https://www.linkedin.com/in/jaroslaw-pogoda/">LinkedIn <SiLinkedin/></a></p>
            <br/>
            <p className="footer-text"><small>© copyright Jaroslaw Pogoda {date}</small></p>
        </div>
    )
}