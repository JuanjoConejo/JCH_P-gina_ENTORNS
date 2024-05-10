import React from 'react';
import './curriculum.css'; // Importamos los estilos específicos para el currículum
import CV from "./Juanjo.png";

// Contenido del currículum
const curriculumJuanjo = "¡Hola! Soy Juanjo Conejo Hernández, un entusiasta desarrollador web apasionado por crear experiencias digitales increíbles. Con experiencia en tecnologías como JavaScript, React y CSS, estoy siempre buscando aprender y mejorar mis habilidades. ¡Echa un vistazo a mi currículum a continuación!";

function Curriculum() {
    return (
        <div className="curriculum-container">
            <p className="descripcion">{curriculumJuanjo}</p>
            <br />
            <img src={CV} alt="Currículum de Juanjo Conejo Hernández" className="curriculum-img" />
        </div>
    );
}

export default Curriculum;
