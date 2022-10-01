import React from 'react'
import styles from '/styles/Person.module.scss';

export default function Person(props) {
    return (
        <div className={styles.person}>
            <h4>{props.position}</h4>
            <img className={styles.img} src={props.image}/>
            {/* <img src={props.image}></img> */}
            <div className={styles.details}>
                <h5>{props.name}</h5>
                <h5>{props.email}</h5>
            </div>
        </div>
    );
};