import EventsData from '../assets/data/ics-week.json';
import { Container, Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import SponsorsData from '../assets/data/sponsors.json';

import styles from '/styles/ICSWeek.module.scss';

function Event(props) {
    const [modalShow, setModalShow] = useState(false);
    const {club, name, time, desc, location , rsvp, img, location_link} = props;
    return (
        <>
            {name && <td className={styles.content} onClick={() => setModalShow(true)}>
                <span>
                    {club && club}
                    {club && <br/>}
                    <strong>{name}</strong>
                </span>
                <br/>{time}<br/>
                <u>{location}</u>
            </td>}
            {!name && <td></td>}
            <EventModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                club={club}
                name={name}
                desc={desc}
                time={time}
                img={img}
                location={location}
                rsvp={rsvp}
                location_link={location_link}
            />
       </>
    );
}

function EventModal(props) {
    const {club, name, time, desc, location , rsvp, img, location_link} = props;
    return (
      <Modal
        {...props}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" >
            {club && club}
            {club && ': '}
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:"center"}}>
            {img && <img
                src={img}
                title={name}
                width={200}
                height={200}
                style={{objectFit:"contain"}}
            />}
            <span className={styles.modalSpan}>
                <p>{time} | <a href= {location_link} target="_blank" rel="noreferrer">{location}</a></p>
           </span>
          {desc}
        </Modal.Body>
        <Modal.Footer>
          {rsvp && <Button variant="success" href={rsvp}>RSVP</Button>}
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function ICSWeek() {
    return (
        <Container>
            <div className={styles.banner}>
                <div>
                    <h1>ICS Week 2024</h1>
                    <img
                        className={styles.anteater}
                        src="\assets\img\ics-week\icsweek_2.png"
                    />
                </div>
                <p>
                    Welcome to ICS Week, a week-long event celebrating the Donald Bren School of Information and Computer Science and its community! ICSSC, in collaboration with ICS affiliated organizations and supported by the ICS department, promises that this event is to be a one-of-a-kind experience.
                </p>
                <br/>
                <br />
                <p>ICS Week is Here! Follow us on Instagram @icssc.uci to keep posted about the events!</p>
                {/* <br />
                <br />
                <p>Events to be announced!</p> */}
            </div>
            
            <div className={styles.schedule}>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Monday <br/>(5/13)</th>
                        <th>Tuesday <br/>(5/14)</th>
                        <th>Wednesday <br/>(5/15)</th>
                        <th>Thursday <br/>(5/16)</th>
                        <th>Friday <br/>(5/17)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {EventsData["row1"].map((event, ind) => <Event {...event}  key={ind}/>)}
                        </tr>
                        <tr>
                            {EventsData["row2"].map((event, ind) => <Event {...event}  key={ind}/>)}
                        </tr>
                        <tr>
                            {EventsData["row3"].map((event, ind) => <Event {...event}  key={ind}/>)}
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className={styles.sponsorSection}>
                <h2>
                    Thank You to Our Sponsors
                </h2>
                <div className={styles.sponsorContainer}>
                    {SponsorsData.map((sponsor, index) => (
                        <a
                            key={index}
                            href={sponsor.link}
                            title={sponsor.name}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img 
                                src={sponsor.logo}
                                alt={sponsor.name}
                            />
                        </a>
                    ))}
                    
                </div>  
            </div>

            <div style={{textAlign:"center"}}>
                <img src='/assets/img/graphics/icssc_website_footer.png' 
                    alt="ICSSC Footer Graphic"
                    className="footerImage"
                />
            </div>
        </Container>
    );
}