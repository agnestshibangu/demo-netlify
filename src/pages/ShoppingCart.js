import React from 'react';
import { CartState } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import '../style/shoppingcart.scss'
import { Link } from 'react-router-dom';

export default function ShoppingCart() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)

    let totalPrice = 0;
    cart.map((cartItem) => totalPrice += cartItem.price * cartItem.qty)
    console.log(totalPrice) 

    let totalQuantity = 0;
    cart.map((cartItem) => totalQuantity += cartItem.qty * 1)
    console.log(totalQuantity) 

    return (
        <div>
            <h1>Shopping Cart</h1>
            <Container>
                <Row >
                    {cart.map((cartItem) => {
                        const { id, title, price, img, desc, qty } = cartItem;
                        return <Col sm={12} md={6} lg={3} key={id} className="menu-item col-md-offset-2">
                            <img className="img-product" src={img} />
                            <div className="item-title-and-price">
                                <span className="item-price">${price}</span>
                            </div>
                            <h3 className="item-title">{title}</h3>
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: cartItem,
                                    })
                                }}>REMOVE</button>

                            <input type="number" id="quantity" defaultValue={qty} name="quantity" min="1" max="5"
                                onChange={(e) =>
                                    dispatch({
                                        type: "CHANGE_CART_QTY",
                                        payload: {
                                            id: cartItem.id,
                                            qty: e.target.value
                                        }
                                    })
                                }
                            />
                        </Col>
                    })}
                </Row>
            </Container>

            <div className="total-amount">TOTAL = ${totalPrice}</div>

            <Link  to="/ordervalidation">
                <button className="finish-order-button">FINISH ORDER</button>
            </Link>

        </div>
    )
}
