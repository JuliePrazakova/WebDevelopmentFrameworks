import React from 'react';
import styles from './notification.module.css';

export default function Notification(props) {
            let background = { backgroundColor: props.color };
            return (
                <div className={styles.base} style={ background }  >
                    { props.content }
                </div>
            )
}