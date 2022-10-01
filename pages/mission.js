import { Button, Col, Container, Row } from "react-bootstrap";
import { FaRegHandshake, FaRegLightbulb, FaUserFriends, FaTools,
        FaSchool, FaPeopleArrows } from "react-icons/fa";
import styles from '/styles/Mission.module.scss';
import AwardCard from "../components/award-card";
import CommitteeAccordion from "../components/committee-accordion";
import Person from "../components/person";
import Affiliate from "../components/affiliate";
import PastBoard from "../components/past-board";
import Clubs from '../assets/data/clubs.json';
import PastBoards from '../assets/data/past-boards.json';
import BoardMembers from '../assets/data/board.json';

import anteater_hw from '../assets/img/anteater_hw.png';

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';


export default function Mission() {

  // To fade in items
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <main role="main">

      <section className="section">
        <Container className="section">
          <Row>
            <header className="text-center">
              <img src={anteater_hw} height="500px" alt="Anteater On Laptop"/>
              <h2>Our Mission</h2>
            </header>
          </Row>
          <Row>
            <Col className={styles.missionCol}>
              <div className={styles.iconBg}><FaRegLightbulb size={50} /></div>
              <h4>Improve</h4>
              <p>Student life of the Donald Bren School of Information and Computer Sciences academically, socially, and professionally.</p>
            </Col>
            <Col className={styles.missionCol}>
              <div className={styles.iconBg}><FaRegHandshake size={50} /></div>
              <h4>Create and Deepen</h4>
              <p>Bonds between students, faculty, administration, companies, and alumni of the ICS School as well as similar groups.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision */}
      <section className='section'>
        <Container className={styles.outlineContainer} data-aos="fade-up">
          <header> 
            <h2 className='text-center h2'>Our Vision</h2>
              <p>We believe that through a strong community, we will enhance the quality of student life and ensure great jobs for students of all majors and minors within the Donald Bren School of Information and Computer Science by:</p>
          </header>

          <Row>
            <Col lg={6}>
              <ul className={styles.visionColumn}>
                <li> <div className={styles.iconBg}><FaSchool size={42} /></div> <p>Understanding, disseminating, and contributing to departmental decisions including curriculum, research, and hiring decisions</p></li>
                <li> <div className={styles.iconBg}><FaUserFriends size={42} /></div> <p>Creating a network of alumni which will provide students with opportunities to grow while in school, and opportunities after graduation to leverage that growth</p></li>
                <li> <div className={styles.iconBg}><FaTools size={42} /></div> <p>Provide one another with tools and opportunities to become the most competitive technical experts in the world</p></li>
              </ul>
            </Col>

            <Col lg={6}>
              <ul className={styles.visionColumn}>             
                <li> <div className={styles.iconBg}><FaPeopleArrows size={42} /></div> <p>Developing nontechnical skills such as leadership, team building, and advocacy outside of the classroom that will ultimately determine success in the rest of our careers</p></li>              
                <li> <div className={styles.iconBg}><FaPeopleArrows size={42} /></div> <p>Informing students about the immense opportunities that are available on the UC Irvine campus, in the neighboring community, and throughout the world</p></li>             
                <li> <div className={styles.iconBg}><FaPeopleArrows size={42} /></div> <p>Creating partnerships between the academics of our campus and the related industries</p></li>
              </ul>
            </Col>
          </Row>

          <br></br>
          <div className="text-center">
            <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vQupcAAOIoyS3EZOpPFuFhin1g4aVpITSgD4QXRgZAYxHtxSv4I5ToApD8JprDHOmoABY1qg81wuYZc/pub">
              <button className={styles.button}>Learn more through our constitution.</button>
            </a>
          </div>
        </Container>
      </section>

      {/* Affiliates */}
      <section className='section'>
        <div data-aos="fade-up" className={styles.outlineContainer}>
          <header>
              <h2 className='text-center'>Our Member Clubs</h2>
          </header>
          <Container>
            <div className={styles.affiliates}>
              {
                Clubs.map(club => <Affiliate {...club} />)
              }
            </div>
          </Container>
        </div>
      </section>

      {/* Awards and recognitions */}
      <section className='section'>
        <Container data-aos="fade-up">
          <Row>
            <Col className={styles.awardsCol}>
              <h1>Awards</h1>
              <AwardCard
                title={"Most Outstanding Social/Support Organization"}
                text={"Anteater Awards 2011"}
              />
              <AwardCard
                title={"Student Alumni Engagement Sponsorship"}
                text={"Student Alumni Association"}
              />
            </Col>
            <Col className={styles.awardsCol}>
              <h1>Recognitions</h1>
              <AwardCard
                title={"3rd Place in Winter UCI Alumni Association Club Affiliates Challenge"}
                text={"2020"}
              />
              <AwardCard
                title={"Second place in UCI Campus Organizations & Volunteer Programs I Love My Org contest"}
                text={"2020"}
              />
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Committees */}
      <section className='section'>
        <Container data-aos="fade-up">
          <h1 className="text-center">Committees</h1>
          <CommitteeAccordion />
        </Container>
      </section>

      {/* Board members */}
      <section className='section'>
        <div data-aos="fade-up">
          <h1 className="text-center">Board Members</h1>
          <Container className={styles.boardMembers}>
              {BoardMembers.map(member => <Person {...member} />)}
          </Container>
        </div>
      </section>

      {/* Past Board Members */}
      <section className='section'>
        <div data-aos="fade-up">
          <Container className={styles.pastBoards}>
            <h1 className="text-center">Past Board Members</h1>
            <div>
              {PastBoards.map(board => <PastBoard {...board}/>)}
            </div>
          </Container>
        </div>
      </section>

    </main>
  )
}
