import React from 'react';
import styles from './mainNews.module.css';
import photo from '../images/photo.jpg';
import saveButton from '../images/saveButton.PNG';

export default function New(props) {
    let border = { borderBottom: "0px solid #e9eaed" };
    let visible = { display: "block", marginTop: "10px" };
    if(props.id == "1"){
        border = { borderBottom: "1px solid #e9eaed" };
        visible = { display: "none" };
    }
    //<img src={photo} alt="Delfin" className={styles.photo}/>
    const color = { color: "#00518D" }
        return (
                <div style={ border }>
                    <div className={ styles.text }>
                        <div><b style={ color }>{props.title}</b>{props.content}</div>
                        <div style={ visible }><img src={photo} alt="Fotka" className={styles.photo}/></div>
                    </div>
                   <div className={ styles.underText }>
                       <div>
                           <div>{props.topic} </div>{props.time}
                       </div>
                       <img src={saveButton} alt="save" className={styles.saveButton}/>
                   </div>
                </div>
        )
}