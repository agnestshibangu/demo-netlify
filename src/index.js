import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './style/index.scss'
import Context from "./context/Context"
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Illustrations from './pages/Illustrations'
import Stickers from './pages/Stickers'
import Mugs from './pages/Mugs'
import Calendars from './pages/Calendars'
import ShoppingCart from './pages/ShoppingCart';
import SingleItemPage from './pages/SingleItemPage';
import OrderValidation from './pages/OrderValidation';
import './style/index.scss'

import Categories from './Components/Categories'


ReactDOM.render(

  <Router>
    <Context>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route path="/mugs" element={<Mugs />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/singlepageitem/:id" element={<SingleItemPage />} />
        <Route path="/ordervalidation" element={<OrderValidation />} />
      </Routes>
    </Context>
    <Footer />
  </Router>,
  document.getElementById('root')
)

// const allCategories = ['all', ...new Set(items.map((item) => item.category))]; 
// console.log(allCategories)