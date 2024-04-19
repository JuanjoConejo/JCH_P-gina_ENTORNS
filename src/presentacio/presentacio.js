// Descripción
const presentacionJuanjo = 
"¡Hola soc Juanjo Conejo Hernández, un programador en constant evolucio. Actualment estic fent un curs de programacio!"

// URL de la imagen
const IMATGE = "https://images.hola.com/imagenes/actualidad/20230124225179/quevedo-bizarrap-semana-antes-shakira-cancion-al/1-194-501/quevedo-t.jpg"

function Presentacio(){ 
    return(
        <div>
            {presentacionJuanjo}
            <img src={IMATGE} />
        </div>
    )
}

export default Presentacio