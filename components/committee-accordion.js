import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import styles from '/styles/CommitteeAccordion.module.css';
import Committees from '../assets/data/committees.json'
import Container from 'react-bootstrap/Container';
import Wrap from 'react-bootstrap/Container';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function CommitteeCard(props) {

    const [selected, setSelected] = useState(null);
    const accordionToggle = (index) => {
      if (selected == index) {
        return setSelected(null);
      }
      setSelected(index);
    }

    return (
        <div className={styles["cards"]}>
          {Committees.map( (committee, index) => {
            return (
              <div className={styles["committee-card"]}>
                <Container className={styles["card-container"]}>
                  <div className={styles["expandable"]}>
                    <Wrap className={styles["accordionWrap"]} onClick={() => accordionToggle(index)} key={index}>
                      <h2>{committee.name}</h2>
                      <span>{selected == index ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                    </Wrap>
                  </div>
                  {selected == index ? (
                    <Dropdown>
                      <div className='content'>
                      <p>{committee.desc}</p>
                      <h2>Members</h2>
                      <p>{committee.members}</p>
                  </div>
                    </Dropdown>
                  ) : null}
                </Container>
              </div>
            )
          })}
        </div>
    );
};