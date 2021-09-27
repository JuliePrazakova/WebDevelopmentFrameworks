import React from 'react';
import styles from './sideArticle.module.css';

export default function SideComments(props) {
    let VIP = { display: 'none' };
    if(props.vip === "yes") {
        VIP = { display: 'block' };
    }

    const display = { display: 'flex' };
    return (
        <div className={styles.box}>
            <div style={ display }>
                <div className={styles.number}>{props.number}</div>
                <div className={styles.title}>
                        <p>
                            <b>{props.title}</b> {props.content}
                        </p>
                        <div style={ VIP }>Tilaajille</div>
                </div>
            </div>

        </div>
    )
}