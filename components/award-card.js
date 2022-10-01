import React from 'react'
import styles from '/styles/AwardCard.module.scss';

export default function AwardCard(props) {
    return (
        <div className={styles.awardCard}>
            <h3>{props.text}</h3>
            <h5>{props.title}</h5>
        </div>
    );
};