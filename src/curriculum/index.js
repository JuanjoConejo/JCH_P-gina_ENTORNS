import React from 'react';
import './curriculum.css'; // Importamos los estilos específicos para el currículum
import CV from "./Juanjo.png";

// URL de la imagen a agregar después de la descripción
const imagenURL = "https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473?h=464";

// URL del perfil de LinkedIn de Juanjo Conejo
const linkedinURL = "https://www.linkedin.com/in/juanjo-conejo-9150462b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

// URL del perfil de Twitter de Juanjo Conejo
const twitterURL = "https://twitter.com/JuanjoConejo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";

// URL del perfil de Instagram de Juanjo Conejo
const instagramURL = "https://www.instagram.com/juanjoconejo/?hl=es";

// URL del perfil de GitHub de Juanjo Conejo
const githubURL = "https://github.com/JuanjoConejo";

// Contenido del currículum
const curriculumJuanjo = "Hola! Sóc en Juanjo Conejo Hernández, un entusiasta desenvolupador web apassionat per crear experiències digitals increïbles. Amb experiència en tecnologies com JavaScript, React i CSS, sempre estic buscant aprendre i millorar les meves habilitats. Fes una ullada al meu currículum a continuació! I no dubtis a seguir les meves xarxes socials!";

function Curriculum() {
    return (
        <div className="curriculum-container">
            <p className="descripcion">{curriculumJuanjo}</p>
            {/* Enlace clickeable que lleva al perfil de LinkedIn */}
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <img src={imagenURL} alt="LinkedIn" className="curriculum-img-small" />
            </a>
            {/* Fin del enlace */}
            {/* Enlace clickeable que lleva al perfil de Twitter */}
            <a href={twitterURL} target="_blank" rel="noopener noreferrer" className="twitter-link">
                <img src="https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp" alt="Twitter" className="curriculum-img-small" />
            </a>
            {/* Fin del enlace */}
            {/* Enlace clickeable que lleva al perfil de Instagram */}
            <a href={instagramURL} target="_blank" rel="noopener noreferrer" className="instagram-link">
                <img src="https://i.blogs.es/c04a74/instagram/840_560.jpg" alt="Instagram" className="curriculum-img-small" />
            </a>
            {/* Fin del enlace */}
            {/* Enlace clickeable que lleva al perfil de GitHub */}
            <a href={githubURL} target="_blank" rel="noopener noreferrer" className="github-link">
                <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" className="curriculum-img-small" />
            </a>
            {/* Fin del enlace */}
            <br />
            <img src={CV} alt="Currículum de Juanjo Conejo Hernández" className="curriculum-img" />
        </div>
    );
}

export default Curriculum;
