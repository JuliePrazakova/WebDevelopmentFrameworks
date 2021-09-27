import React from 'react';

import styles from './header.module.css';

export default function Header() {
    return (
        <div className={ styles.header }>
            <div>
                <span>
                    <div>Helsinkingin sanomat</div>
                    <div>Uutiset</div>
                    <div>Lehdet</div>
                </span>

                <div className={styles.special}>Tilaa</div>
                <div>Kirjaudu</div>
                <div>Valikko</div>
                <div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
            </div>
        </div>
    )
}