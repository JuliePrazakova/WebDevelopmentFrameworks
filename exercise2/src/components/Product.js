import React from "react";
import styles from "./product.module.css";

/* Products */
const Product = props => {

    return <li className={ styles.line }>
        <p className={ styles.box }>{ props.qty }{ props.unit }
        </p>
        <div>
            { props.value }
        </div>
        <button onClick={ () => props.deleteProduct(props.id) }>Delete</button>
    </li>
}

export default Product;