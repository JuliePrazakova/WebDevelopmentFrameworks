import React from 'react';
import SideComments from "./SideComments";
import styles from './sideArticle.module.css';

export default function SideArticle() {
    const allSideComments = [
        {
            number: "1",
            title: "Rikosahvhc |" ,
            content: "Nunc sem felis, placerat sed ligula sed, ultrices vulputate eros. Maecenas commodo tempor. ",
            vip: "yes"
        },
        {
            number: "2",
            title: "HS Vantaa |",
            content: "Nunc sem felis, placerat sed ligula sed, ultrices vulputate eros.",
            vip: "yes"
        },
        {
            number: "3",
            title: "Nyt.fi |",
            content: "Nunc sem felis, placerat sed ligula sed, ultrices vulputate eros. Maecenas commodo tempor mauris molestie dignissim.",
            vip: "no"
        },
        {
            number: "4",
            title: "Ahoj světe |",
            content: "Nunc sem felis, placerat sed ligula sed, ultrices vulputate eros. Maecenas commodo tempor mauris molestie dignissim.",
            vip: "no"
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.mainTitle}>Luetuimmat</div>
            {
                allSideComments.map(element => <SideComments number={ element.number } title={ element.title } content={ element.content } vip={ element.vip } />)
            }
            <div className={ styles.button }>Nayta lisaa</div>
            </div>
    )
}