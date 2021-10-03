import React from 'react';
import styles from './SearchList.module.css';

import Result from './Result';

export default function SearchList(props) {

    return (
        <div>
            <div className={ styles.box }>
                {
                    props.items.map(item => <Result key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}
