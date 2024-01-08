import { Row, Button, Modal } from "react-bootstrap";
import EventsData from "../assets/data/events.json";
import React, { useState } from "react";

import styles from "/styles/Events.module.scss";

function isISODateString(str) {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
  return isoDateRegex.test(str);
}

function EventModal(props) {
  const { title, time, location, desc, rsvp_src, onHide, pastEvent } = props;

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
        {rsvp_src && !pastEvent && (
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
  const { src, title, time, customTime, location } = props;

  const [modalShow, setModalShow] = useState(false);

  const dateString = new Date(time + "T00:00:00").toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Handles "legacy" time formatting
  const formattedTime = dateString == "Invalid Date" ? time : dateString;

  return (
    <>
      <div className={`${styles.eventBox}`} onClick={() => setModalShow(true)}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={src} alt="Event Image" />
        <h4 style={{ marginTop: "10px", fontWeight: "600" }}>{title}</h4>

        <p>{location}</p>
        <p>{customTime ?? formattedTime}</p>
      </div>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
        time={formattedTime}
      />
    </>
  );
}

export default function Events() {
  const currentDate = new Date().toISOString().split("T")[0];
  const eventsData = EventsData.events;

  const upcomingEvents = eventsData.filter((event) => {
    if (!isISODateString(event.time)) {
      // console.warn(`Invalid ISO time format for event: ${event.title}`);
      return false;
    }

    return currentDate < event.time;
  });

  const pastEvents = eventsData.filter((event) => {
    if (!isISODateString(event.time)) {
      // console.warn(`Invalid ISO time format for event: ${event.title}`);
      return true;
    }

    return currentDate > event.time;
  });

  return (
    <>
      {/* Upcoming Events */}
      <div className="sectionAlt">
        <h2>Upcoming Events</h2>
        <p>
          Check out our{" "}
          <a
            target="_blank"
            title="Instagram"
            href="https://www.instagram.com/icssc.uci/"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          for more!
        </p>
        {upcomingEvents?.length > 0 ? (
          <Row style={{ justifyContent: "center" }}>
            <div className={`${styles.sectionEvents} `}>
              <div className={`${styles.eventsGrid}`}>
                {upcomingEvents?.map((event) => (
                  <Event {...event} key={event.title} pastEvent={false} />
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
                  <Event {...event} key={event.title} pastEvent={true} />
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
