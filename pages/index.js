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
          alt="Placeholder Image"
        />
        <h3>Title</h3>
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
            {/* Terminal Container Graphic Inspired from the CalHacks Team at Berkeley */}
            <div className={`${styles.heroGridItemSplash}`}>
              <div className={`${styles.heroSplashContainer}`}>
                <h1>
                  ICS Student Council
                </h1>
                <p>
                  Stop by our general meetings! We have various social and academic events for everyone.<br></br><br></br> Join us every <strong><u>Wednesday 7-8pm at DBH 6011</u></strong>!
                </p>
                <a  href="/get-involved">
                  <button type="button" className={`pinkButton`}>Get Involved ></button>
                </a>
              </div>
            </div>
        </div>
      </div>
      
      {/* About Section */}
      {/* Wave Graphic From the CalHack Team at Berkeley! */}
      <img className={`${styles.heroFooterBackground}`} src="/assets/img/graphics/wave.png" alt="Box Edge"/>
      <div className={`${styles.heroFooter}`}>
        <div className={`${styles.heroFooterContent}`}>
          <div className={`${styles.heroFooterText}`}>
            <h1>About Us</h1>
            <p>ICS Student Council, founded in 2010, is a student-run organization that serves ICS students. Our mission is to deepen students' connections with the Donald Bren School of Information and Computer Sciences & UCI Alumni and improve them professionally, socially, and academically.</p>
            <a href="/mission">Learn More ></a>
          </div>
          <img src='/assets/img/graphics/anteater_hw.png' alt="About Us Graphic" />
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
          <Carousel prevLabel={''} nextLabel={''} indicators={false} fade={true} slide={false} touch={false}>
          {EventsData["past_pictures"].map((past, ind) => (
            <Carousel.Item key={ind}>
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
      <h2>Projects</h2>
        <Row>
            <div className={`${styles.horizontalGallery}`}>
              {/* Map project data onto ProjectDisplay. Placeholder for now */}
              <ProjectDisplay/>
              <ProjectDisplay/>
              <ProjectDisplay/>
              <ProjectDisplay/>
              <ProjectDisplay/>
            </div>
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

        {/* As of 2022-2023 we do not have any sponsors to display */}
        {/* <div className={`${styles.elementList}`}>
              {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
        </div> */}
      </div>

      {/* Footer Graphic */}
      <div style={{textAlign:"center"}}>
        <img src='/assets/img/graphics/icssc_website_footer.png' 
          alt="ICSSC Footer Graphic"
          className="footerImage"
        />
      </div>
    </>
  )
}