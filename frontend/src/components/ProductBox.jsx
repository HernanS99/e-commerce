import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductBox = ({ item }) => {
    const context = useContext(CartContext)
    const { name, imgUrl, qty, _id, price } = item
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      });
    return (
        <div className="card rounded-3 mb-4">
                            <div className="card-body p-4">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img
                                            src={imgUrl}
                                            className="img-fluid rounded-3" alt="Cotton T-shirt"></img>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                        <p className="lead fw-normal mb-2">{name}</p>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        {/* <button className="btn btn-link px-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                            <i className="fas fa-minus"></i>
                                        </button> */}

                                        <input id="form1" min="0" name="quantity" defaultValue={item.qty} type="number"
                                            className="form-control form-control-sm" />

                                        {/* <button className="btn btn-link px-2"
                                            onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                            <i className="fas fa-plus"></i>
                                        </button> */}
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h5 className="mb-0">{formatter.format(item.qty * price)}</h5>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <button onClick={() => context.deleteFromCart(_id)} className="btn btn-danger"><i className="fas fa-trash fa-lg"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}
export default ProductBox