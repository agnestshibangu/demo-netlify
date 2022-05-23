import React, { useState } from 'react';
import Menu from '../Components/Menu';
import Categories from '../Components/Categories';
import items from '../Components/data';
import '../style/catalogue.scss';

const allCategories = ['all', ... new Set(items.map((item) => item.category))];

function Catalogue() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [itemNumber, setItemNumber] = useState(items.length)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      setItemNumber(items.length)
      console.log(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
    console.log(newItems.length)
    setItemNumber(newItems.length)
  }


  return (
    <main>
      <section className="menu-section">
        {/* <div className="catalogue-bar" /> */}
        <div className='category-box'>
          <Categories categories={categories} filterItems={filterItems} />
          {/* <div className='item-count'>{itemNumber} items</div> */}
        </div>
        {/* <div className="catalogue-bar" /> */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Catalogue;