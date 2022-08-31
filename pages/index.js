import Sponsors from '../assets/data/sponsors.json'
import { Col, Container, Row } from 'react-bootstrap';
import EventsData from '../assets/data/events.json';
import styles from '/styles/Index.module.css';

function TitleBanner(props) {
  return (
    <>
      <h4 className={`${styles.heroTitle}`}>ICS Student Council </h4>
      {/* <p className={`${styles.heroSubtitle}`}>The club for students, by students at the University of California, Irvine</p> */}
      <button type="button" className={`buttonLight ${styles.heroButton}`}>Get Involved</button>
    </>
  )
}

function SponsorLogo(props) {
  const { id, logo, name } = props;
  return (
    <div className={`${styles.elementListItem}`}>
      <a href={`sponsors.html#${id}`}>
        <img 
          src={logo} 
          alt={`${name} Logo`}
          height="auto"
          width="300px"
        />
      </a>
    </div>
  )
}

function Event(props) {
  const {src, title} = props;
  return (
    <div className={`${styles.elementListItem}`}>
      <img 
        src={src} 
        alt={`${title} Logo`}
        height="auto"
        width="300px"
        style={{borderRadius:"35px"}}
        />
  
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className={`${styles.heroBanner}`}>
        <TitleBanner/>
      </div>
      <div className={`${styles.section}`} style={{paddingTop:"5rem"}}>
      {/* Image Sticker or more pizazz <img 
        src='https://outline-prod.imgix.net/20170316-PuyyaZXOIGnZf1201YOM?auto=format&q=60&w=1280&s=1191ab9b0ada186b5d18215ca9dcf7b4'
        height='300px'
        className={`${styles.coolImage}`}
        /> */}
      <Row className="justify-content-center">
        <Col lg={12} sm={12}>
          <h2 className={`${styles.sectionTitle}`}>About Us</h2>
          <p className={`${styles.sectionDesc}`}>
            ICS Student Council, founded in 2010, is a student-run organization that serves ICS students. Our mission is to deepen students' connections with the Donald Bren School of Information and Computer Sciences & UCI Alumni and improve them professionally, socially, and academically.
          </p>
          <p className={`${styles.sectionLink}`}><a href="/get-involved">Learn More →</a></p>
        </Col>
      </Row>
      </div>

      <div className={`${styles.sectionColorLight} `}>
        <Row className="justify-content-center">
          <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Our Events</h2>
            <p className={`${styles.sectionDesc}`}>We aim to host events that will better ICS Students academically, professionally, and socially.</p>
            <p className={`${styles.sectionLink}`}><a href="/events">View Events →</a></p>
          </Col>
        </Row>
        <div className={`${styles.elementList}`}>
              {EventsData["past"].slice(0,3).map(past => <Event {...past} key={past.id}/>)}
        </div>
      </div>

      <div className={`${styles.section}`}>
        <Row className="justify-content-center">
            <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Projects</h2>
            <p className={`${styles.sectionDesc}`}>
              Our open source projects are to help students succeed at finding, planning, executing, and managing technology projects. It is our goal to teach students useful technical knowledge outside of class. All students are welcome to contribute.
            </p>
            <p className={`${styles.sectionLink}`}><a href="/projects">Learn More →</a></p>
            </Col>
        </Row>
      </div>

      <div className={`${styles.sectionColorLight}`}>
        <Row className="justify-content-center">
            <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Thank You to Our Sponsors</h2>
            <p className={`${styles.sectionDesc}`}>
            Thanks to the help of our sponsors, ICSSC continues to fulfill our mission of supporting students when they seek for exceptional opportunities at the University of California, Irvine.
            </p>
            <p className={`${styles.sectionLink}`}><a href="/sponsors">Learn About Sponsoring →</a></p>
            </Col>
        </Row>
        <div className={`${styles.elementList}`}>
              {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
        </div>
      </div>
    </>
  )
}