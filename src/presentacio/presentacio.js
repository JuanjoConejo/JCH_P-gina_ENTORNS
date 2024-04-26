import './styles.css';

// Descripción
const presentacionJuanjo = 
"¡Hola soc Juanjo Conejo Hernández, un programador en constant evolucio. Actualment estic fent un curs de programacio!"

// URL de la imagen
const IMATGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeGl7AXrtpNwYDkz2e0F78ICKmH5w7FPCg_1KIzFkKA&s"

function Presentacio(){ 
    return(
        <div>
            <p className="descripcion">{presentacionJuanjo}</p>
            <br />
            <img src={IMATGE} />
        </div>
    )
}

export default Presentacio