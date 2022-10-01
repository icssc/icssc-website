import Image from "next/image";
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
      <div className={`${styles.eventBox}`} style={{margin:"10px"}} onClick={() => setModalShow(true)}>
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
      <h1>Events</h1>
      <h1 className="text-center">Current Events</h1>
      {<p className="text-center">No current events! Stay tuned for more :)</p>}
      <Row style={{justifyContent:"center"}}>
      <div className={`${styles.sectionEvents} `}>
        <div className={`${styles.eventsGrid}`}>
            {EventsData["current"].map(past => <Event {...past} isCurrent={true}/>)}
        </div>
      </div>
      </Row>

      <h1 className="text-center mt-5 pt-5">Past Events</h1>
      <Row style={{justifyContent:"center"}}>
      <div className={`${styles.sectionEvents} `}>
        <div className={`${styles.eventsGrid}`}>
            {EventsData["past"].map(past => <Event {...past} isCurrent={false}/>)}
        </div>
      </div>
      </Row>
      
    </>
  )
}