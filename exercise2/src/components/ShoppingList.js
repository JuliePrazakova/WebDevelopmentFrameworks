import React from "react";
import Product from './Product';

/* Shopping list component, which renders bunch of ShoppingListItem components inside a HTML ul element based on the data received through items prop */
const ShoppingList = props => {
    return <ul>
        {
            props.items.map(i => <Product {...i} key={ i.id } deleteProduct={ props.deleteProduct } />)
        }
    </ul>
}

export default ShoppingList;