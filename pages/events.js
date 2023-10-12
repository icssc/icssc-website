import { Row, Button, Modal } from "react-bootstrap";
import EventsData from "../assets/data/events.json";
import React, { useState } from "react";
import Image from "next/image";

import styles from "/styles/Events.module.scss";

function EventModal(props) {
  const { title, time, location, desc, rsvp_src } = props;
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Event(props) {
  const [modalShow, setModalShow] = useState(false);
  const { src, title, time, location, desc, iscurrent, rsvp_src } = props;
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
  const currentDate = new Date();
  const events = EventsData.events;

  const currentEvents = events.filter((event) => {
    /**
     * eventDate expects the format of event.time to be of a format "Monday, September 25th, 2023"
     * Including the day, then month + date (with a suffix!), and lastly a year is necessary for the formatting
     */
    const eventDate = new Date(
      event.time
        .split(" ")
        .slice(1)
        .join(" ")
        .replace(/(\d)(st|nd|rd|th)/, "$1")
    );

    if (isNaN(eventDate)) {
      // console.error(`Invalid time format for event: ${event.title}`);
      return false;
    }

    return currentDate < eventDate;
  });

  const pastEvents = events.slice(currentEvents.length);

  return (
    <>
      <div className="sectionAlt">
        {/* Event Title Section */}
        <h2>Upcoming Events</h2>

        {/* Events */}
        {currentEvents?.length > 0 ? (
          <Row style={{ justifyContent: "center" }}>
            <div className={`${styles.sectionEvents} `}>
              <div className={`${styles.eventsGrid}`}>
                {currentEvents?.map((event) => (
                  <Event {...event} iscurrent="true" key={event.title} />
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
        <Row style={{ justifyContent: "center" }}>
          <div className={`${styles.sectionEvents} `}>
            <div className={`${styles.eventsGrid}`}>
              {pastEvents?.map((pastEvent) => (
                <Event {...pastEvent} isCurrent={false} key={pastEvent.title} />
              ))}
            </div>
          </div>
        </Row>
      </div>
    </>
  );
}
