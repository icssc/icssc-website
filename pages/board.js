import { Col, Row, Accordion } from "react-bootstrap";
import { FaHandshake, FaBrain, FaUserGraduate, FaTools, FaSchool, FaPeopleArrows } from "react-icons/fa";

import styles from '/styles/Board.module.scss';

import BoardMembers from '../assets/data/board.json';
import PastBoards from '../assets/data/past-boards.json'


function Person(props) {
  // name, position, email, image
  return (
      <div className={styles.person}>
        <img alt={props.image} src={props.image} alt={props.name}/>
        <h5>{props.position}</h5>
        <h4>{props.name}</h4>
        <p>{props.email}</p>
      </div>
  );
}


export default function Board() {
  return (
    <>
      {/* Board Section */}
      <div className="sectionAlt">
        <h2>Our Board</h2>
        <div className={styles.boardMembers}>
          {BoardMembers.map(member => <Person {...member} key={member.name}/>)}
        </div>
      </div>

      {/* Past Board Section */}
      <div className="sectionAlt">
        <h2>Past Board</h2>
        <div className={styles.pastContainer}>
          <Accordion defaultActiveKey="0" flush>
            {PastBoards.map((board, ind) => (
              <Accordion.Item eventKey={ind} key={ind}>
              <div className={styles.pastSection}>
                <Accordion.Header>{board.year}</Accordion.Header>
                <Accordion.Body>
                {board.positions.map((position, index) => {
                    const {title, name} = position;
                    return (
                        <div className={styles.pastBoard} key={index}>
                          <h5>{name}</h5>
                          <p>{title}</p>
                        </div>
                      )
                    })}
                </Accordion.Body>
              </div>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  )
}