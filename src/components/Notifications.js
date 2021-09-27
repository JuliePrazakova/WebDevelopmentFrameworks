import React from 'react';
import styles from './notification.module.css';
import Notification from './Notification';

export default function Notifications() {

    const allNotifications = [
        {
            content: "JUURINYT: Yhdysvaltojen osakkeiden voimakas halpeneminen veri Aasian porssit laskuun",
            color: "#4196a4"
        },
        {
            content: "JUURINYT: Yhdysvaltojen osakkeiden voimakas halpeneminen veri Aasian porssit laskuun",
            color: "#4196a4"
        },
        {
            content: "MAINOS: Fakroille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!",
            color: "#00b8e0"
        }
    ]

        return (
                <div className={styles.around} >
                    {
                        allNotifications.map(element => <Notification content={element.content} color={element.color}/>)
                    }
                    </div>
        )
}