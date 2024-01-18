import humans2021_2022 from '/assets/data/humans-of-ics/2021-2022/humans-of-ics.json';
import { Container, Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';


import styles from '/styles/HumansOfICS.module.scss';

function Human(props) {
    const {img, name, date, desc, year, major, src } = props;
    return (
      <a href={src}>
        <div className={styles.card}>
          <img
            src={img}
          />
          <div className={styles.card__text}>
            <h1>{name}</h1>
            <h2>{date}</h2>
            <p>{desc}</p>
            <p>Click To Learn More {'>'} </p>
          </div>
        </div>
       </a>
    );
}


export default function HumansOfICS() {
    return (
        <Container>
            <div className={styles.banner}>
                <h1>Humans of ICS</h1>
                <p>
                  ICS students come from all kinds of backgrounds, and we want to highlight YOUR journey! Our goal is to try to connect everyone in ICS one step at a time!
                  <br />
                  You can nominate yourself or a friend <a href="https://bit.ly//ICSSCHumansICS">here</a> and we will be in contact with you for the next steps!
                </p>
            </div>
            <div className={styles.card_container}>
            {humans2021_2022.map((human, ind) => <Human {...human} key={ind}/>)}

            
            </div>
            
            
        </Container>
    );
}