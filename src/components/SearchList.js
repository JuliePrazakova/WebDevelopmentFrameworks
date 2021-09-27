import React from 'react';
import styles from './SearchList.module.css';

import SearchResult from './SearchResult';

export default function SearchList(props) {

    return (
        <div>
            <div className={ styles.presentationModeGrid }>
                {
                    props.items.map(item => <SearchResult key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}
