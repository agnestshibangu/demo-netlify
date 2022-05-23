import React from 'react';
import { CartState } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import '../style/ordervalidation.scss'

export default function OrderValidation() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)

    let totalPrice = 0;
    cart.map((cartItem) => totalPrice += cartItem.price * cartItem.quantity)
    console.log(totalPrice)


    return <div>
        <h1>Order validation page</h1>

        <div className="order-recap-section">
            <Container>
                <Row >
                    {cart.map((menuItem) => {
                        const { id, title, price, img, desc } = menuItem;
                        return <Col sm={12} md={6} lg={3} key={id} className="menu-item col-md-offset-2">
                            <img className="img-product" src={img} />
                            <div className="item-title-and-price">
                                <span className="item-price">${price}</span>
                            </div>
                            <p className="item-description">{desc}</p>
                        </Col>
                    })}
                </Row>
            </Container>
            <div className="total-amount">TOTAL = ${totalPrice}</div>
        </div>

        <form className="customer-form">
            <label>
                email:
                <input type="text" name="email" />
            </label>
            <label>
                first name :
                <input type="text" name="firstName" />
            </label>
            <label>
                last name :
                <input type="text" name="lastName" />
            </label>
            <label>
                address :
                <input type="text" name="address" />
            </label>
            <label>
                postal code :
                <input type="text" name="postalCode" />
            </label>
            <label>
                city :
                <input type="text" name="city" />
            </label>
            <label>
                phone number :
                <input type="text" name="phoneNumber" />
            </label>
            <input className="form-submit-button" type="submit" value="Envoyer" />
        </form>

    </div>;
}
