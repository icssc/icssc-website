import Image from "next/image";
import BoardMembers from '../assets/data/board.json'
import GraphicDesigners from '../assets/data/graphic-designers.json'
import { Button, Col, Container, Row } from "react-bootstrap";
import { usestate } from 'react';
import { FaRegHandshake, FaRegLightbulb, FaUserFriends, FaTools,
        FaSchool, FaPeopleArrows } from "react-icons/fa";
import styles from '/styles/Mission.module.css';
import Clubs from '../assets/data/clubs.json';
import AwardCard from "../components/award-card";
import CommitteeAccordion from "../components/committee-accordion";
import Person from "../components/person";

function Affiliate(props) {
  const { id, logo, name } = props;

  return (
    <a href={`affiliates.html#${id}`} className={styles["affiliate-icon"]} s>
      <Image
        src={logo}
        alt={`${name} Logo`}
        height="100%"
        width="100%"
      />
    </a>
  )
}

export default function Mission() {
  return (
    <main role="main">
      <br></br>
      <section className="container u-content-space u-bg-arrow-wrapper">
        <div className="text-center u-bg-arrow-bottom">
          <p className="h5 mb-0">ICS Student Council was created by <strong className="text-primary">passionate </strong> students for all interested students.</p>
        </div>
      </section>

      <section className="text-center bg-light u-content-space">
        <div className="container">
          <header className="text-center w-md-50 mx-auto mb-8">
            <h2 className="h1">Our Mission</h2>
          </header>

          <Row>
            <Col lg={6} className="mb-5">
              <div className="display-4 text-primary mb-4">
                <FaRegLightbulb />
              </div>
              <h4 className="h5">Improve</h4>
              <p className="mb-0">Student life of the Donald Bren School of Information and Computer Sciences academically, socially, and professionally.</p>
            </Col>

            <Col lg={6} className="mb-5">
              <div className="display-4 text-primary mb-4">
                <FaRegHandshake />
              </div>
              <h4 className="h5">Create and Deepen</h4>
              <p className="mb-0">Bonds between students, faculty, administration, companies, and alumni of the ICS School as well as similar groups.</p>
            </Col>
          </Row>
        </div>
      </section>

    {/* Vision */}
      <section className="u-content-space">
        <Container>
          <header className="text-center w-md-50 mx-auto mb-8">
            <h2 className="h1">Our Vision</h2>
            <p className="h5">We believe that through a strong community, we will enhance the quality of student life and ensure great jobs for students of all majors and minors within the Donald Bren School of Information and Computer Science by:</p>
          </header>

          <Row>
            <Col lg={6}>
              <ul className="vision-column">
                <li> <FaSchool /> <p>Understanding, disseminating, and contributing to departmental decisions including curriculum, research, and hiring decisions</p></li>
                <li> <FaUserFriends /> <p>Creating a network of alumni which will provide students with opportunities to grow while in school, and opportunities after graduation to leverage that growth</p></li>
                <li> <FaTools /> <p>Provide one another with tools and opportunities to become the most competitive technical experts in the world</p></li>
              </ul>
            </Col>

            <Col lg={6}>
              <ul className="vision-column">             
                <li> <FaPeopleArrows /> <p>Developing nontechnical skills such as leadership, team building, and advocacy outside of the classroom that will ultimately determine success in the rest of our careers</p></li>              
                <li> <FaPeopleArrows /> <p>Informing students about the immense opportunities that are available on the UC Irvine campus, in the neighboring community, and throughout the world</p></li>             
                <li> <FaPeopleArrows /> <p>Creating partnerships between the academics of our campus and the related industries</p></li>
              </ul>
            </Col>
          </Row>

          <br></br>
          <div className="text-center">
            <Button variant="primary" size="lg" href="https://docs.google.com/document/u/1/d/e/2PACX-1vQupcAAOIoyS3EZOpPFuFhin1g4aVpITSgD4QXRgZAYxHtxSv4I5ToApD8JprDHOmoABY1qg81wuYZc/pub">
              Learn more through our constitution.
            </Button>
          </div>
        </Container>
      </section>

      {/* Affiliates */}
      <section className="bg-light u-content-space">
        <Container>
          <header className="text-center w-md-50 mx-auto mb-8">
            <h2 className="h1 mb-0">Our Member Clubs</h2>
          </header>

          <div className={styles.affiliates}>
            {
              Clubs.map(club => <Affiliate {...club} />)
            }
          </div>
        </Container>
      </section>

      {/* Awards and recognitions */}
      <section>
        <Container>
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
      <section>
        <h1 className="text-center">Committees</h1>
        <CommitteeAccordion />
      </section>

      {/* Board members */}
      <section>
        <h1 className="text-center">Board Members</h1>
        <Container className={styles.boardMembers}>
          <div className={styles.boardMember}>
            {BoardMembers.map(member => <Person {...member} />)}
          </div>
        </Container>
      </section>

    </main>
  )
}
