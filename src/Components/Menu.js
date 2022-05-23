import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import imgCatalogue from '../Components/images/illu.jpg';
import { Link } from "react-router-dom";
import '../style/catalogue.scss';

const Menu = ({ items }) => {

    return <div className="section-center">

        <Container>
            <Row >
                {items.map((menuItem) => {
                    const { id, title, price, img, desc } = menuItem;
                    return <Col sm={12} md={6} lg={3} key={id} className="menu-item col-md-offset-2">
                        <Link className="item-title" to={`/singlepageitem/${id}`}>
                            <div className="item-content">
                                <img className="img-product" src={img} />
                                {/* <div className="item-title-and-price"> */}

                                <p className="item-title">{title}</p>

                                <p className="item-price">${price}</p>
                                {/* </div> */}

                            </div>
                        </Link>

                    </Col>
                })}
            </Row>
        </Container>
    </div>
}

export default Menu;