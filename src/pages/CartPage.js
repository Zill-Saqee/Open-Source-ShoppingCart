import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { navigate } from "gatsby";
import Header from "../components/Header";
export default function CartPage() {
    console.log("Cart Page")
    const { totalPrice,clearCart, cartDetails, incrementItem, decrementItem, redirectToCheckout } = useShoppingCart();


    return (

        <>
        <Header />
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th >Product</th>
                            <th >Price</th>
                            <th >Quantity</th>
                            <th className="text-center">Subtotal</th>
                            <th>Increase/Decrease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(cartDetails).length ?
                        
                        Object.keys(cartDetails).map((item) => (
                            <tr key={cartDetails[item].sku}>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-sm-2 hidden-xs"><img src={cartDetails[item].image} alt="..." className="img-responsive" /></div>
                                        <div className="col-sm-10">
                                            <h4 className="nomargin">{cartDetails[item].name}</h4>
                                            <p>{cartDetails[item].description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">{cartDetails[item].price/100}</td>
                                <td data-th="Quantity">
                                    <input type="button" className="form-control text-center" readOnly defaultValue={cartDetails[item].quantity}  />
                                </td>
                                <td data-th="Subtotal" className="text-center">{(cartDetails[item].price/100) * cartDetails[item].quantity}</td>
                                <td className="actions" data-th="">
                                    <button className="btn btn-info btn-sm" onClick={() =>incrementItem(cartDetails[item].sku)}><i className="fa fa-refresh"></i>+</button>
                                    <button className="btn btn-danger btn-sm" onClick={()=> decrementItem(cartDetails[item].sku)}><i className="fa fa-trash-o"></i>-</button>
                                </td>
                            </tr>
                        ))
                        : <tr> <td><h6 className="nomargin">Your Cart is Empty </h6></td></tr>

                    }
                    </tbody>
                    <tfoot>

                        <tr>
                            <td colSpan="2"><button onClick={() =>navigate("/")} className="btn btn-warning"> Continue Shopping</button>
                            <button onClick={() =>clearCart()} className="btn btn-danger clear-basket"> Clear Shopping Basket</button>
                            </td>

                            <td colSpan="2" className="hidden-xs text-center"><strong>Total ${totalPrice/100}</strong></td>
                            <td><button onClick={()=>redirectToCheckout()} className="btn btn-success btn-block">Checkout </button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>
    )
}
