import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import items from '../Components/data';
import '../style/singleitempage.scss'
import { CartState } from '../context/Context';


export default function SingleItemPage() {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    console.log(cart)

    const { id } = useParams();
    const singleItem = items.filter((item) => item.id == id )
    console.log(singleItem[0])
    const product = singleItem[0]
    const title = singleItem[0].title
    const description = singleItem[0].desc
    const price = singleItem[0].price
    const category = singleItem[0].category
    const img = singleItem[0].img

    // suggestion section

    const suggestedItems = items.filter((item) => item.title != title && item.category == category)


    return <div>
        <div className="container-single-item">
           
           <div className="single-item-sub-container sub-container1">
                <img className="container-single-item-img"  src={img} />
           </div>
                              
           
           <div className="single-item-sub-container sub-container2">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className='price-tag'>${price}</p>
                    <button className='add-to-cart-button'
                        onClick={() => {
                            dispatch({
                                type: 'ADD_TO_CART',
                                payload: product,
                            })
                        }}>Add to cart</button>
            </div>

        </div>


        <div className="suggestion-box">
            <h1 className="suggestion-box-title">you may also like</h1>

            <Container>
                <Row >
                    {suggestedItems.map((item) => {
                        const { id, title, price, img, desc } = item;
                        return <Col sm={12} md={6} lg={3} key={id} className="menu-item col-md-offset-2">
                            <img className="img-product" src={img} />
                            <div className="item-title-and-price">
                                <Link className="item-title" to={`/singlepageitem/${id}`}>
                                    <h4 >{title}</h4>
                                </Link>
                                <span className="item-price">${price}</span>
                            </div>
                            <p className="item-description">{desc}</p>
                        </Col>
                    })}
                </Row>
            </Container>


        </div>

    </div>

}
