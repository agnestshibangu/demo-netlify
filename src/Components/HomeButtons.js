import React, { useState } from 'react';
import '../style/catalogue.scss';
import collectionsItems from '../Components/collectionsItemsData';
import { Link } from "react-router-dom";

function ReadMore({ isOpened, setOpened, category, img }) {
    return (
        <div className='showmore' onClick={setOpened} className={isOpened ? "collection-item active" : "collection-item"}>
            <p className={isOpened ? "collection-item-title-none" : "collection-item-title"}>{category}</p>
            <img src={img} alt="" className='button-image'  />
            <Link to={`/${category}`} >
                <button className={isOpened ? "button-see-all" : "button-see-all-none"}>see all</button>
            </Link>
        </div>
    )
}

const HomeButtons = () => {

    const [openedItemId, setOpenedItemId] = useState(null)

    return (
        <div className="collections-grid">
            {collectionsItems.map((collectionItem) => {
                const { id, category, img } = collectionItem;
                return (
                    <ReadMore
                        key={id}
                        isOpened={openedItemId === id}
                        setOpened={() => setOpenedItemId(id)}
                        category={category}
                        img={img}
                        >
                    </ReadMore>
                )
            })}
        </div>
    )
}

export default HomeButtons;