import Sponsors from '../assets/data/sponsors.json'
import { Col, Row, Button, Carousel } from 'react-bootstrap';
import EventsData from '../assets/data/events.json';

import styles from '/styles/Index.module.scss';

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

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <div className={`${styles.heroBanner}`}>
        <div className={`${styles.heroGrid}`}>
        <div className={`${styles.heroGridItem}`}>
          <p className={`${styles.heroIcon1}`}>Enhance</p>
          <p className={`${styles.heroIcon2}`}>Empower</p>
          <p className={`${styles.heroIcon3}`}>Enable</p>
          <img 
            src='/assets/img/anteater_laptop.png'
            height="500px"
            alt="Anteater On Laptop"
            />
          </div>
          <div className={`${styles.heroGridItemSplash}`}>
            <div className={`${styles.heroSplashContainer}`}>
              <h1>
                ICS Student Council
              </h1>
              <p>
              We work to improve the lives of the students professionally, socially, and academically and deepen the connections students have with the Donald Bren School of Information and Computer Sciences and UCI Alumni.
              </p>
              <Button type="button" className={`${styles.heroButton}`} href="/get-involved">Get Involved ></Button>
            </div>
          </div>
        </div>
      </div>
      <svg width="100%" height="auto" viewBox="0 0 1554 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M710.12 78.3317C414.859 -13.2364 204.004 -1.8682 46.7187 3.58231H0V209.144H1553.39V78.3317C1198.33 115.707 1005.38 169.9 710.12 78.3317Z"
        fill="#6B7AAB"/>
      </svg>

      {/* About Section */}
      <div className={"section"} style={{margin:"-16px", paddingTop:"0px", paddingBottom:"5rem"}}>
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

      {/* Events Section */}
      <div className={"sectionAlt"}>
        <Row className="justify-content-center">
          <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Our Events</h2>
            <p className={`${styles.sectionDesc}`}>We aim to host events that will better ICS Students academically, professionally, and socially.</p>
            <p className={`${styles.sectionDesc}`}>Here are some moments from our previous events!</p>
          </Col>
        </Row>
        <div style={{width:"400px"}}>
          <Carousel controls={false} indicators={false}>
          {EventsData["past"].map(past => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={past.src}
                alt={past.title}
                height="400px"
              />
            </Carousel.Item>
          ))}
          </Carousel>
        </div>
        <p className={`${styles.sectionLink}`}><a href="/events"><br></br>View All Events ></a></p>
      </div>

      {/* Projects Section */}
      <div className={"section"}>
        <Row className="justify-content-center">
            <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Projects</h2>
            <p className={`${styles.sectionDesc}`}>
              Our open source projects are to help students succeed at finding, planning, executing, and managing technology projects. It is our goal to teach students useful technical knowledge outside of class. All students are welcome to contribute.
            </p>
            <p><a href="/projects">Learn More ></a></p>
            </Col>
        </Row>
      </div>

      {/* Sponsors Section */}
      <div className={"sectionAlt"}>
        <Row className="justify-content-center">
            <Col lg={12} sm={12}>
            <h2 className={`${styles.sectionTitle}`}>Thank You to Our Sponsors</h2>
            <p className={`${styles.sectionDesc}`}>
            Thanks to the help of our sponsors, ICSSC continues to fulfill our mission of supporting students when they seek for exceptional opportunities at the University of California, Irvine.
            </p>
            <p className={`${styles.sectionLink}`}><a href="/sponsors">See All Sponsors ></a></p>
            </Col>
        </Row>
        <div className={`${styles.elementList}`}>
              {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
        </div>
      </div>
    </>
  )
}