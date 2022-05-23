import React, { useState } from 'react';
import items from '../Components/data';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import imgCatalogue from '../Components/images/illu.jpg';



function Calendars() {

  const newItems = items.filter((item) => item.category === 'calendars')
  console.log(newItems)

  return <div className="section-center">

    <Container>
      <Row >
        {newItems.map((menuItem) => {
          const { id, title, price, img, desc } = menuItem;
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
}



export default Calendars;