import React from "react";
import Item from '../Items/Item';

function itemList({ items}) {
    return (
        <div>
            {items.map(item => <Item item={item} key={item.id}/>)}
        </div>
    )
}

export default itemList