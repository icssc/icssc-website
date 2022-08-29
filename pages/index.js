import Image from 'next/image'
import Sponsors from '../assets/data/sponsors.json'
import { Col, Container, Row, Button } from 'react-bootstrap';
import styles from '/styles/Index.module.css';

function TitleBanner(props) {
  return (
    <Container fluid>
      <h4 className={`${styles.heroTitle}`}>An organization to improve ICS students professionally, socially, and academically.</h4>
      <p className={`${styles.heroSubtitle}`}>The club for students, by students at the University of California, Irvine</p>
      <Button className={`${styles.heroButton}`} size="lg">Get Involved</Button>
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

export default function Home() {
  return (
    <>
    <div className={`${styles.heroBanner}`}>
      <TitleBanner />
    </div>
        
      <Container fluid>
        <Row className="justify-content-center m-2">
          <Col lg={4} md={12} className="text-center m-2">
            <img
              className={`${styles.imgRound}`}
              src="/assets/img/events/past/2021_fall/bonfire.jpeg"
              width="100%"
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

        <div className={`${styles.section}`} style={{marginTop:"200px"}}>
          <h2 className={`${styles.sectionTitle}`}>Events</h2>
          <p>
            Check out our upcoming events!
          </p>
        </div>

        <div className={`${styles.section}`} style={{marginTop:"200px"}}>
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
