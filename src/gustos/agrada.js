import React from 'react';
import './agrada.css'; // Importa el archivo CSS de estilos

// Array de cosas que te gustan con títulos y descripciones
const cosesQueEtAgraden = [
  {
    titulo: "Valorant",
    descripcion: "M'agrada jugar a Valorant en els meus temps lliures.",
    imagen: "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-d9ca2c0fbaff9d80e8dedfbd726aa438"
  },
  {
    titulo: "Futbol",
    descripcion: "Gaudeixo veient i jugant a futbol.",
    imagen: "https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2023/12/11/17023144752291.jpg"
  },
  {
    titulo: "Sortir de festa",
    descripcion: "M'encanta socialitzar i divertir-me en festes.",
    imagen: "https://www.economistjurist.es/wp-content/uploads/sites/2/2023/07/la1.jpg"
  },
  {
    titulo: "Bàsquet",
    descripcion: "Disfruto jugant a bàsquet amb els meus amics.",
    imagen: "https://www.nbamaniacs.com/wp-content/uploads/2017/08/GettyImages-245168-768x527.jpg"
  },
  {
    titulo: "Fortnite",
    descripcion: "M'agrada jugar a Fortnite i competir amb altres jugadors.",
    imagen: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb"
  },
  {
    titulo: "Disseny de videojocs 3D",
    descripcion: "M'apassiona dissenyar i crear videojocs en 3D.",
    imagen: "https://valenciaplaza.com/public/Image/2015/12/3d_NoticiaAmpliada.jpg"
  }
];

function Gust() {
  return (
    <div className="me-gusta-container">
      <h2 className="me-gusta-title">El que m'agrada</h2>
      <ul className="me-gusta-list">
        {cosesQueEtAgraden.map((gust, index) => (
          <li key={index} className="me-gusta-item">
            <span className="me-gusta-titulo">{gust.titulo}:</span>
            <span className="me-gusta-descripcion">{gust.descripcion}</span>
            {gust.imagen && <img src={gust.imagen} alt={gust.titulo} className="me-gusta-imagen" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gust;
