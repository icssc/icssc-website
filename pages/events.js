import { Row, Button, Modal } from "react-bootstrap";
import EventsData from '../assets/data/events.json';
import React, { useState } from 'react';

import styles from '/styles/Events.module.scss';

function EventModal(props) {
  const {src, title, time, location, desc, iscurrent, rsvp_src} = props;
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
        <p>{time} | {location}</p>
        {desc}
      </Modal.Body>
      <Modal.Footer>
        {iscurrent && <Button variant="success" href={rsvp_src}>RSVP</Button>}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Event(props) {
  const [modalShow, setModalShow] = useState(false);
  const {src, title, time, location, desc, iscurrent, rsvp_src} = props;
  return (
    <>
      <div className={`${styles.eventBox}`} onClick={() => setModalShow(true)}>
          <img
              src={src}
          />
          <h4 style={{marginTop:"10px", fontWeight:"600"}}>
              {title}
          </h4>
          <p>{location}<br/> {time}</p>
          
      </div>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        desc={desc}
        iscurrent={iscurrent}
        time={time}
        location={location}
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
      <h2>Upcoming Events</h2>
      {/* {<p>No current events! Stay tuned for more :)</p>} */}
      {/* Uncomment This To Display Current Events */}
      <Row style={{justifyContent:"center"}}>
        <div className={`${styles.sectionEvents} `}>
          <div className={`${styles.eventsGrid}`}>
              {EventsData["current"].map(past => <Event {...past} iscurrent="true" key={past.title}/>)}
          </div>
        </div>
      </Row>
      </div>

      
      {/* Event Past Section */}
      <div className="section">
        <h2>Past Events</h2>
        <Row style={{justifyContent:"center"}}>
        <div className={`${styles.sectionEvents} `}>
          <div className={`${styles.eventsGrid}`}>
              {EventsData["past"].map(past => <Event {...past} isCurrent={false} key={past.title}/>)}
          </div>
        </div>
        </Row>
      </div>
      
    </>
  )
}