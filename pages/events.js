import { Row, Button, Modal } from "react-bootstrap";
import EventsData from "../assets/data/events.json";
import React, { useState } from "react";
import Image from "next/image";

import styles from "/styles/Events.module.scss";

function EventModal(props) {
  const { title, time, location, desc, rsvp_src, onHide } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {time} | {location}
        </p>
        {desc}
      </Modal.Body>
      <Modal.Footer>
        {rsvp_src && (
          <Button variant="success" href={rsvp_src}>
            RSVP
          </Button>
        )}
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Event(props) {
  const { src, title, time, location } = props;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className={`${styles.eventBox}`} onClick={() => setModalShow(true)}>
        <Image src={src} alt="Event Image" width={100} height={100} />
        <h4 style={{ marginTop: "10px", fontWeight: "600" }}>{title}</h4>
        <p>
          {location} {time}
        </p>
      </div>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </>
  );
}

function isISODateString(str) {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return isoDateRegex.test(str);
}

export default function Events() {
  const currentDate = new Date().toISOString().split("T")[0];
  const events = EventsData.events;

  const upcomingEvents = events.filter((event) => {
    // event.time is expected to be of the format YYYY-MM-DD
    if (!isISODateString(event.time)) {
      // console.warn(`Invalid ISO time format for event: ${event.title}`);
      return false;
    }

    return currentDate < event.time;
  });

  // Slice the array at the index after upcomingEvents to get pastEvents
  const pastEvents = events.slice(upcomingEvents.length);

  return (
    <>
      {/* Upcoming Events */}
      <div className="sectionAlt">
        <h2>Upcoming Events</h2>

        {upcomingEvents?.length > 0 ? (
          <Row style={{ justifyContent: "center" }}>
            <div className={`${styles.sectionEvents} `}>
              <div className={`${styles.eventsGrid}`}>
                {upcomingEvents?.map((event) => (
                  <Event {...event} key={event.title} />
                ))}
              </div>
            </div>
          </Row>
        ) : (
          <p>No current events! Stay tuned for more {":)"}</p>
        )}
      </div>

      {/* Past Events */}
      <div className="section">
        <h2>Past Events</h2>

        {pastEvents?.length > 0 ? (
          <Row style={{ justifyContent: "center" }}>
            <div className={`${styles.sectionEvents} `}>
              <div className={`${styles.eventsGrid}`}>
                {pastEvents?.map((event) => (
                  <Event {...event} key={event.title} />
                ))}
              </div>
            </div>
          </Row>
        ) : (
          <p>No past events! Stay tuned for more {";)"}</p>
        )}
      </div>
    </>
  );
}
