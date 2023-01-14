import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import EventsData from '../assets/data/events.json';
import React, { useState } from 'react';

import styles from '/styles/Events.module.scss';

function EventModal(props) {
  const {src, title, time, desc, isCurrent, rsvp_src} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{time}</p>
        {desc}
      </Modal.Body>
      <Modal.Footer>
        {isCurrent && <Button variant="success" href={rsvp_src}>RSVP</Button>}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Event(props) {
  const [modalShow, setModalShow] = useState(false);
  const {src, title, time, desc, isCurrent, rsvp_src} = props;
  return (
    <>
      <div className={`${styles.eventBox}`} onClick={() => setModalShow(true)}>
          <img
              src={src}
          />
          <h4 style={{marginTop:"10px", fontWeight:"600"}}>
              {title}
          </h4>
          <p>{time}</p>
      </div>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        desc={desc}
        isCurrent={isCurrent}
        time={time}
        rsvp_src={rsvp_src}
      />
    </>
  );
}

export default function Events() {
  return (
    <>
      {/* Event Title Section */}
      <div className="sectionAlt">
      <h2>Current Events</h2>
      {<p>No current events! Stay tuned for more :)</p>}
      {/* Uncomment This To Display Current Events */}
      {/* <Row style={{justifyContent:"center"}}>
        <div className={`${styles.sectionEvents} `}>
          <div className={`${styles.eventsGrid}`}>
              {EventsData["current"].map(past => <Event {...past} isCurrent={true}/>)}
          </div>
        </div>
      </Row> */}
      </div>

      
      {/* Event Past Section */}
      <div className="section">
        <h2>Past Events</h2>
        <Row style={{justifyContent:"center"}}>
        <div className={`${styles.sectionEvents} `}>
          <div className={`${styles.eventsGrid}`}>
              {EventsData["past"].map(past => <Event {...past} isCurrent={false}/>)}
          </div>
        </div>
        </Row>
      </div>
      
    </>
  )
}