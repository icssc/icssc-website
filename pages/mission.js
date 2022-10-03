import { Col, Row } from "react-bootstrap";
import { FaHandshake, FaBrain, FaUserGraduate, FaTools, FaSchool, FaPeopleArrows } from "react-icons/fa";

import styles from '/styles/Mission.module.scss';
import Clubs from '../assets/data/clubs.json';
import AwardsJSON from '../assets/data/awards.json';
import BoardMembers from '../assets/data/board.json';
import PastBoards from '../assets/data/past-boards.json'

function ClubsDisplay(props) {
  const {id, name, logo, website, description} = props
  return (
    <div className={`${styles.galleryCard}`}>
      <div className={`${styles.galleryImageContainer}`}>
        <a target="_blank" rel="noreferrer" href={website}>
        <img
          src={logo}
          alt={name}
        />
        </a>
      </div>
    </div>
  )
}

function AwardSection(props) {
  // title, provider
  return (
    <Col style={{textAlign:"center", color:"black", maxWidth:500, marginTop:25, marginBottom:25}} md={6}>
      <h4>{props.title}</h4>
      <p>{props.provider}</p>
    </Col>
  )
}

function Person(props) {
  // name, position, email, image
  return (
      <div className={styles.person}>
        <img alt={props.image} src={props.image} alt={props.name}/>
        <h5>{props.position}</h5>
        <h4>{props.name}</h4>
        <p>{props.email}</p>
      </div>
  );
}

function PastBoard(props) {
  const { year, positions } = props;
  return (
    <div className={styles.pastSection}>
      <h4>{year}</h4>
      <Row className="justify-content-center">
        {positions.map(position => {
          const {title, name} = position
          return (
            <div className={styles.pastBoard}>
              <h5>{title}</h5>
              <p>{name}</p>
            </div>
            )
          })}
      </Row>
    </div>
  )
}

export default function Mission() {
  return (
    <>
      {/* Mission Section */}
      <div className="sectionAlt">
        <h2>Our Mission Statement</h2>
        <p>Improve student life of the Donald Bren School of Information and Computer Sciences academically, socially, and professionally 
          and deepen bonds between students, faculty, administration, companies, and alumni of the ICS School as well as similar groups.
        </p>
      </div>

      {/* Vision Section */}
      <div className="section">
        <h2>Our Vision</h2>
        <p>At ICSSC, we will enhance the quality of student life and ensure great jobs for students of all majors and minors within the Donald Bren School of Information and Computer Science by:</p>
        <div className={styles.visionGrid}>
          <Row lg={6} sm={12}>
            <Col><div className={styles.iconBg}><FaSchool size={35}/></div> <p>Understanding, disseminating, and contributing to departmental decisions including curriculum, research, and hiring decisions</p></Col>
            <Col><div className={styles.iconBg}><FaPeopleArrows size={35}/></div> <p>Developing nontechnical skills such as leadership, team building, and advocacy outside of the classroom that will ultimately determine success in the rest of our careers</p></Col>
          </Row>
          <Row lg={6} sm={12}>
            <Col><div className={styles.iconBg}><FaUserGraduate size={35}/></div> <p>Creating a network of alumni which will provide students with opportunities to grow while in school, and opportunities after graduation to leverage that growth</p></Col>
            <Col><div className={styles.iconBg}><FaBrain size={42}/></div> <p>Informing students about the immense opportunities that are available on the UC Irvine campus, in the neighboring community, and throughout the world</p></Col>
          </Row>
          <Row lg={6} sm={12}>
            <Col><div className={styles.iconBg}><FaTools size={42}/></div> <p>Provide one another with tools and opportunities to become the most competitive technical experts in the world</p></Col>
            <Col><div className={styles.iconBg}><FaHandshake size={42}/></div> <p>Creating partnerships between the academics of our campus and the related industries</p></Col>
          </Row>
        </div>
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/u/1/d/e/2PACX-1vQupcAAOIoyS3EZOpPFuFhin1g4aVpITSgD4QXRgZAYxHtxSv4I5ToApD8JprDHOmoABY1qg81wuYZc/pub"
        ><button className={styles.infoButton} type="button">View Our Constitution</button></a>
      </div>
      
      {/* Member Club Section */}
      <div className="sectionAlt">
        <h2>Our Member Clubs</h2>
        <Row>
            <div className={`${styles.horizontalGallery}`}>
              {/* Map project data onto ProjectDisplay. Placeholder for now */}
              {Clubs.map(sponsor => <ClubsDisplay {...sponsor} key={sponsor.id}/>)}
            </div>
        </Row>
      </div>

      {/* Committees Section */}
      <div className="section">
        <h2>What Are ICSSC Committees?</h2>
        <p>ICSSC is comprised of five committees — each serving a different topic and mission. We strive to cover a plethora of interests and encourage members to learn new skills, too!</p>
        <p><a href="/committees">See Our Committees ></a></p>
      </div>

      {/* Awards Section */}
      <div className="sectionAlt">
        <h2>Awards</h2>
        <Row className="justify-content-center">
        {AwardsJSON["awards"].map(award => <AwardSection {...award}/>)}
        </Row>
        <h2>Recognitions</h2>
        <Row className="justify-content-center">
          {AwardsJSON["recognitions"].map(rec => <AwardSection {...rec}/>)}
        </Row>
      </div>

      {/* Board Section */}
      <div className="section">
        <h2>Our Board</h2>
        <div className={styles.boardMembers}>
          {BoardMembers.map(member => <Person {...member} />)}
        </div>
      </div>

      {/* Past Board Section */}
      <div className="sectionAlt">
        <h2>Past Board</h2>
        <div className={styles.pastContainer}>
          {PastBoards.map(board => <PastBoard {...board}/>)}
        </div>
      </div>
    </>
  )
}