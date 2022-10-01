import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import styles from '/styles/CommitteeAccordion.module.scss';
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
        <div className={styles.cards}>
          {Committees.map( (committee, index) => {
            return (
              <div className={styles.committeeCard}>
                <Container>
                  <div>
                    <Wrap className={styles.accordionWrap} onClick={() => accordionToggle(index)} key={index}>
                      {/* the p is just here to center the board name and push the plus to the right */}
                      <p></p>
                      <h3>{committee.name}</h3>
                      <span>{selected == index ? <AiOutlineMinus size={25}/> : <AiOutlinePlus size={25}/>}</span>
                    </Wrap>
                  </div>
                  {selected == index ? (
                    <Dropdown>
                      <div className="text-center">
                        <p>{committee.desc}</p>
                        <h3>Members</h3>
                        
                        <ul className={styles.members}>
                          {(committee.members).map(function(name, index) {
                            return <li key={index}>{name}</li>;
                          })}
                        </ul>

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