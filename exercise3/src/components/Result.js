import React from 'react';
import styles from './Result.module.css';

export default function Result(props) {
    let top;
    let top2;
    if( props.top === 1 ) {
        top = "TOP";
    }else if( props.top === 3 ){
        top = "HIT";
        }else{
        top2 = { paddingBottom: "16px", background:"white" };
    }

    return (
        <div className={ styles.product } >
            <div>
                <div><img src={`/images/${props.image}`} alt="" width="200px" /></div>
                <div className={ styles.top } style={ top2 }> { top } </div>
                <div className={ styles.name }>{ props.name }</div>
                <div className={ styles.price }>{ props.priceRange } { props.currency } </div>
                <div className={ styles.where }>{ props.where }</div>
            </div>
        </div>
    )
}
