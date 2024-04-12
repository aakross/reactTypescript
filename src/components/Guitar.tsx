// type Guitar = { // Sirve para identificar que tipo de datos son(number, string, etc) y en caso de que haya algun error typescript te ayuda a identificarlos
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
// }
import type { Guitar } from "../types";

type GuitarProps = {
    guitar: Guitar,
    addToCart: (item: Guitar) => void
}

export default function Guitar({ guitar, addToCart }: GuitarProps) { //Aqui se le esta especificando que el tipo de dato de guitar es de tipo Guitar

    const { name, image, description, price } = guitar;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}