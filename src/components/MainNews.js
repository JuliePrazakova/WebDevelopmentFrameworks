import React from 'react';
import styles from './mainNews.module.css';
import New from './New';
import SideArticle from "./SideArticle";
import delfin from '../images/delfin.PNG';

export default function MainNews() {
    const allNews = [
        {   photo:"delfin",
            title:"Elaimet | ",
            content: "1400 delfiiniä surmattiin Färsaarilla: ”Tämä oli virhe”",
            time:"8:12",
            topic:"Ulkomaat",
            id: "1"
        },
        {   photo:"",
            title:"HS-analyysi | ",
            content:"Jokerit teki ratkaisun, jonka takana voi seista - varnaista ongelnmaa se ei kuitenkaan poista",
            time:"6:10",
            topic:"Urheilu",
            id: "2"
        }
    ]
        return (
                <div className={ styles.container }>
                    <div className={ styles.box }>
                        <img src={delfin} alt="Delfin" className={styles.photo}/>
                        {
                            allNews.map(element => <New title={ element.title } content={ element.content } time={ element.time } topic={ element.topic } id={ element.id }/>)
                        }
                    </div>
                    <SideArticle/>
                    </div>
        )
}