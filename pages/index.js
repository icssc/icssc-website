import Image from 'next/image'
import Sponsors from '../assets/data/sponsors.json'
import { Col, Container, Row } from 'react-bootstrap';
import EventsData from '../assets/data/events.json';
import styles from '/styles/Index.module.css';

function TitleBanner(props) {
  return (
    <Container fluid>
      <h4 className={`${styles.heroTitle}`}>An organization to improve ICS students professionally, socially, and academically.</h4>
      <p className={`${styles.heroSubtitle}`}>The club for students, by students at the University of California, Irvine</p>
      <button type="button" className={`buttonLight`}>Get Involved</button>
    </Container>
  )
}

function SponsorLogo(props) {
  const { id, logo, name } = props;

  return (
    <Col>
      <a href={`sponsors.html#${id}`}>
        <Image 
          src={logo} 
          alt={`${name} Logo`}
          height={120}
          width={120}
        />
      </a>
    </Col>
  )
}

function Event(props) {
  const {src, title} = props;
  return (
    <Col md={4} sm={12}>
      <img
      src={src}
      width="90%"
      style={{marginTop:"10px",marginBottom:"10px"}}
      className={`${styles.imgRound}`}
      />
    </Col>
  )
}

export default function Home() {
  return (
    <>
    <div className={`${styles.heroBanner}`}>
      <TitleBanner />
    </div>
        
      <Container fluid>
        <Row className="justify-content-center align-items-center m-2">
          <Col lg={4} md={12} className="text-center m-2 ">
            <img
              className={`${styles.imgRound}`}
              src="/assets/img/events/past/2021_fall/bonfire.jpeg"
              width="100%"
              alt="About Picture"
            />
          </Col>
          <Col lg={1} md={0}></Col>
          <Col lg={4} md={12} className="m-2">
            <h2 className={`${styles.sectionTitle}`}>About Us</h2>
              <p>
                ICS Student Council was founded by students to better serve the ICS student body. We work to improve the lives of the students professionally, socially, and academically and deepen the connections students have with the Donald Bren School of Information and Computer Sciences and UCI Alumni.
              </p>
            <p>
              We host social and technical events for all students and oversee several large open-source projects for UCI Students
            </p>
          </Col>
        </Row>

        <div style={{marginTop:"5%",paddingTop:"2.5%",paddingBottom:"5%"}}>
          <Row className="justify-content-center align-items-center text-center m-2">
            <Col lg={10} sm={12} className="m-2">
              <h2 className={`${styles.sectionTitle}`} style={{marginBottom:""}}>Events</h2>
                <Row>
                  {EventsData["past"].slice(0,3).map(past => <Event {...past}/>)}
                </Row>
                <button type="button" className="buttonLight">View All</button>
            </Col>
          </Row>
        </div>

        <div className={`${styles.section}`} style={{marginTop:""}}>
          <h2 className={`${styles.sectionTitle}`}>Projects</h2>
          <p>
            Section for projects
          </p>
        </div>
        
        <Row className="justify-content-center">
        <h2 className={`${styles.sectionTitle}`}>Thanks to Our Sponsors!</h2>
          <Col sm={12} lg={10}>
            <Row>
              {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
