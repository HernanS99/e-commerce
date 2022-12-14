import nf from '../assets/img/nf.png'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'

const Card = ({datos}) => {
    const context = useContext(CartContext)
    const [qty, setQty] = useState(1)
    const { brand, inStock, name, price, _id, imgUrl, stock } = datos
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    const reducir = () => {
        if (qty >= 2) {
            setQty(qty - 1)
        }
    }

    const aumentar = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }
    return (

        <div className="col-sm-6 col-md-4 col-xl-3 ">
            <Link to={`/products/${(_id)}`} className="style">
                <div className="card-sl mb-5 ">
                    <div className="card-image">
                        <img
                            src={!imgUrl ? nf : imgUrl} alt='foto' className="img-fluid" />
                    </div>
                    <div className="card-heading">
                        {name}
                    </div>
                    <div className="card-text">
                        {brand}
                    </div>
                    <div className="card-text fw-bold">
                        {formatter.format(price)}
                    </div>

                </div>
            </Link>
            {stock ? (
                <div className="d-flex">
                    <button className="btn btn-light" onClick={reducir} disabled={qty === 1}><i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="my-2 text-center">{qty}</span>
                    <button className="btn btn-light" onClick={aumentar} disabled={qty === stock}><i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            ) : (
                <div className="d-flex align-items-center qty-container">
                    <p className="text-danger fw-semibold">Sin stock</p>
                </div>
            )}
            <div className="card-text fw-bold mb-3 d-grid gap-2">
                <button className="btn btn-primary" onClick={() => context.addToCart(datos, qty)} disabled={stock > 0 ? false : true}>Agregar al carro</button>
            </div>
        </div>
    )
}

export default Card