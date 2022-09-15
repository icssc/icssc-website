import React from 'react'
import styles from '/styles/AwardCard.module.css';

export default function AwardCard(props) {
    return (
        <div className={styles["award-card"]}>
            <h2 className="award-title">{props.title}</h2>
            <p className="award-description">{props.text}</p>
        </div>
    );
};