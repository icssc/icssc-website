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

function ProjectDisplay(props) {
  const {src} = props
  return (
    // Placeholder img and props. Will update when graphics are updated
    <div className={`${styles.galleryCard}`}>
      <div className={`${styles.galleryImageContainer}`}>
        <img
          src={'https://th.bing.com/th/id/OIP.gPjZVOnX-A2jyUrN3gcTcQHaFj?pid=ImgDet&rs=1'}
        />
      </div>
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
            src='/assets/img/graphics/anteater_laptop.png'
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
                Improving ICS students' lives professionally, socially, and academically
              </p>
              <Button type="button" className={`${styles.heroButton}`} href="/get-involved">Get Involved ></Button>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <img className={`${styles.heroFooterBackground}`} src="/assets/img/graphics/wave.png" />
      <div className={`${styles.heroFooter}`}>
        <div className={`${styles.heroFooterContent}`}>
          <div className={`${styles.heroFooterText}`}>
            <h1>About Us</h1>
            <p>ICS Student Council, founded in 2010, is a student-run organization that serves ICS students. Our mission is to deepen students' connections with the Donald Bren School of Information and Computer Sciences & UCI Alumni and improve them professionally, socially, and academically.</p>
            <a href="/get-involved">Learn More ></a>
          </div>
          <img id="splash-footer-image" src='/assets/img/graphics/anteater_hw.png' alt="About Us Graphic" />
        </div>
      </div>

      {/* Events Section */}
      <div className={"sectionAlt"}>
        <Row>
          <Col lg={12} sm={12}>
            <h2>Our Events</h2>
            <p>We aim to host events that will better ICS Students academically, professionally, and socially. <br></br>Here are some moments from our previous events!</p>
          </Col>
        </Row>
        <div className={`${styles.eventBox}`}>
          <Carousel prevLabel={null} nextLabel={null} indicators={false} fade={true} slide={false} touch={false}>
          {EventsData["past_pictures"].map(past => (
            <Carousel.Item>
              <img
                className={`d-block`}
                src={past.src}
                alt={past.title}
              />
            </Carousel.Item>
          ))}
          </Carousel>
        </div>
        <a href="/events">View All Events ></a>
      </div>

      {/* Projects Section */}
      <div className={"section"}>
        <Row>
            <Col lg={12} sm={12}>
            <h2>Projects</h2>
            <div className={`${styles.horizontalGallery}`}>
              {/* Map project data onto ProjectDisplay. Placeholder for now */}
              <ProjectDisplay/>
            </div>

            </Col>
        </Row>
        <p><a href="/projects">Discover Our Projects ></a></p>
      </div>

      {/* Sponsors Section */}
      <div className={"sectionAlt"}>
        <Row>
            <Col lg={12} sm={12}>
            <h2>Thank You to Our Sponsors</h2>
            <p>
            Thanks to the help of our sponsors, ICSSC continues to fulfill our mission of supporting students when they seek for exceptional opportunities at the University of California, Irvine.
            </p>
            <p><a href="/sponsors">See All Sponsors ></a></p>
            </Col>
        </Row>
        <div className={`${styles.elementList}`}>
              {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
        </div>
      </div>
    </>
  )
}