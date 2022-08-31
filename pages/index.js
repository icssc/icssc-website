import Sponsors from '../assets/data/sponsors.json'
import { Col, Row, Button } from 'react-bootstrap';
import EventsData from '../assets/data/events.json';
import styles from '/styles/Index.module.css';

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
        <div className={`${styles.heroGrid}`}>
          <div className={`${styles.heroGridItem}`}>
            <h1 className={`${styles.heroTitle}`} style={{marginBottom:"33px"}}>Enhance <br></br>Empower<br></br>Enable</h1>
            <Button type="button" className={`${styles.heroButton}`} href="/get-involved">Get Involved ></Button>
          </div>
          <div className={`${styles.heroGridItem}`}>
          <img 
            src='/assets/img/ICSSCFrame.png'
            height="350px"
            />
          </div>
        </div>
      </div>
      
      <div className={`${styles.section}`} style={{paddingTop:"5rem"}}>
      <Row className="justify-content-center">
        <Col lg={12} sm={12}>
          <h2 className={`${styles.sectionTitle}`}>About Us</h2>
          <p className={`${styles.sectionDesc}`}>
            ICS Student Council, founded in 2010, is a student-run organization that serves ICS students. Our mission is to deepen students' connections with the Donald Bren School of Information and Computer Sciences & UCI Alumni and improve them professionally, socially, and academically.
          </p>
          <p className={`${styles.sectionLink}`}><a href="/get-involved">Learn More ></a></p>
        </Col>
      </Row>
      </div>

      <div className={`${styles.sectionColorLight} `}>
        <Row className="justify-content-center">
          <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Our Events</h2>
            <p className={`${styles.sectionDesc}`}>We aim to host events that will better ICS Students academically, professionally, and socially.</p>
            <p className={`${styles.sectionLink}`}><a href="/events">View Events ></a></p>
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
            <p className={`${styles.sectionLink}`}><a href="/projects">Learn More ></a></p>
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
            <p className={`${styles.sectionLink}`}><a href="/sponsors">Learn About Sponsoring ></a></p>
            </Col>
        </Row>
        <div className={`${styles.elementList}`}>
              {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
        </div>
      </div>
    </>
  )
}