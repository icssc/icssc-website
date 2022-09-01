import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa";
import styles from '/styles/Mission.module.css';
import Clubs from '../assets/data/clubs.json';

function Affiliate(props) {
  const { id, logo, name } = props
  return (
    <a href={`affiliates.html#${id}`} className={styles["affiliate-icon"]}>
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
    <>
        <h1>What is ISCSC?</h1>
        <p>ICSSC is the official student government for the Donald Bren School of Information & Computer Science (ICS) at the University of California, Irvine. We and our member clubs serve to all students who are interested in the ICS field. We welcome students of all backgrounds and skill levels to join our community and share our love for technology!
            <br></br><br></br>
            With events such as infosessions, workshops, speaker panels, socials, and competitions, we cover a variety of topics including cryptography, design, web development, resume building, community outreach, and much more. Our events are <strong>open to everyone</strong>, regardless of major or experience!
        </p>

        

        <header className="text-center w-md-50 mx-auto mb-8">
            <h2 className="h1">Our Vision</h2>
            <p className="h5">We believe that through a strong community, we will enhance the quality of student life and ensure great jobs for students of all majors and minors within the Donald Bren School of Information and Computer Science by:</p>
        </header>

        <Row>
            <Col lg={4}>
              <ul>
                <li><p>Understanding, disseminating, and contributing to departmental decisions including curriculum, research, and hiring decisions</p></li>
                
                <li><p>Provide one another with tools and opportunities to become the most competitive technical experts in the world</p></li>
              </ul>
            </Col>

            <Col lg={4}>
              <ul>
                <li><p>Developing nontechnical skills such as leadership, team building, and advocacy outside of the classroom that will ultimately determine success in the rest of our careers</p></li>
                
                <li><p>Creating partnerships between the academics of our campus and the related industries</p></li>
              </ul>
            </Col>

            <Col lg={4}>
              <ul>
              <li><p>Creating a network of alumni which will provide students with opportunities to grow while in school, and opportunities after graduation to leverage that growth</p></li>
              <li><p>Informing students about the immense opportunities that are available on the UC Irvine campus, in the neighboring community, and throughout the world</p></li>
              </ul>
            </Col>
        </Row>

        <h1>Our Committees</h1>
        <p>
            ICSSC has five committees to provide different ways for students to contribute to the community. Interested
        </p>    

        <Container>
            <header className="text-center w-md-50 mx-auto mb-8">
                <h2 className="h1 mb-0">Our Member Clubs</h2>
            </header>

            <div className={styles.affiliates}>
                {Clubs.map(club => <Affiliate {...club} />)}
            </div>
        </Container>
        
        <h1>Our Board</h1>

        <h1>Former Board</h1>
    </>
  )
}