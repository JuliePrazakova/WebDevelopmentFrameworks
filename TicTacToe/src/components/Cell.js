import React from 'react';
import styles from './Cell.module.css';

export default function Cell(props) {

    let output = null;
    if(props.value === 1) {
        output = "X";
    }else if(props.value === 2) {
        output = "O";
    }

    return (
        <div className={ styles.cell } onClick={ () => props.onCellClick(props.id) } >
            { output }
        </div>
    )
}