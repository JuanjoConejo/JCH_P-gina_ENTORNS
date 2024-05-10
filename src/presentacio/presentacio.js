import './styles.css';

// Descripción
const presentacionJuanjo = 
"¡Hola soc Juanjo Conejo Hernández, un programador en constant evolucio, i aquesta es la meva pagina web!"

// URL de la imagen
const IMATGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeGl7AXrtpNwYDkz2e0F78ICKmH5w7FPCg_1KIzFkKA&s"

function Presentacio(){ 
    return(
        <div>
            <p className="descripcion-home">{presentacionJuanjo}</p>
            <br />
            <img className="img-presentacio" src={IMATGE} />
        </div>
    )
}

export default Presentacio