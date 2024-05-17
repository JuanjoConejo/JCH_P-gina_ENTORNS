import React from 'react';
import './curriculum.css'; // Importamos los estilos específicos para el currículum
import CV from "./Juanjo.png";

// URL de la imagen a agregar después de la descripción
const imagenURL = "https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473?h=464";

// URL del perfil de LinkedIn de Juanjo Conejo
const linkedinURL = "https://www.linkedin.com/in/juanjo-conejo-9150462b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

// Contenido del currículum
const curriculumJuanjo = "¡Hola! Soy Juanjo Conejo Hernández, un entusiasta desarrollador web apasionado por crear experiencias digitales increíbles. Con experiencia en tecnologías como JavaScript, React y CSS, estoy siempre buscando aprender y mejorar mis habilidades. ¡Echa un vistazo a mi currículum a continuación!";

function Curriculum() {
    return (
        <div className="curriculum-container">
            <p className="descripcion">{curriculumJuanjo}</p>
            {/* Enlace clickeable que lleva al perfil de LinkedIn */}
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                <img src={imagenURL} alt="Imagen de ejemplo" className="curriculum-img-small" />
            </a>
            {/* Fin del enlace */}
            <br />
            <img src={CV} alt="Currículum de Juanjo Conejo Hernández" className="curriculum-img" />
        </div>
    );
}

export default Curriculum;
