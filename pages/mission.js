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
    <main role="main">
      <section class="container u-content-space u-bg-arrow-wrapper">
        <div class="text-center u-bg-arrow-bottom">
          <br/>
          <p class="h5 mb-0">ICS Student Council was created by <strong class="text-primary">passionate </strong> students for all interested students.</p>
        </div>
      </section>

      <section class="text-center bg-light u-content-space">
        <div class="container">
          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h1">Our Mission</h2>
          </header>

          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="display-4 text-primary mb-4">
                <FaRegLightbulb />
              </div>
              <h4 class="h5">Improve</h4>
              <p class="mb-0">Student life of the Donald Bren School of Information and Computer Sciences academically, socially, and professionally.</p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="display-4 text-primary mb-4">
                <FaRegHandshake />
              </div>
              <h4 class="h5">Create and Deepen</h4>
              <p class="mb-0">Bonds between students, faculty, administration, companies, and alumni of the ICS School as well as similar groups.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="u-content-space">
        <Container>
          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h1">Our Vision</h2>
            <p class="h5">We believe that through a strong community, we will enhance the quality of student life and ensure great jobs for students of all majors and minors within the Donald Bren School of Information and Computer Science by:</p>
          </header>

          <Row>
            <Col lg={6}>
              <ul>
                <li><p>Understanding, disseminating, and contributing to departmental decisions including curriculum, research, and hiring decisions</p></li>
                <li><p>Creating a network of alumni which will provide students with opportunities to grow while in school, and opportunities after graduation to leverage that growth</p></li>
                <li><p>Provide one another with tools and opportunities to become the most competitive technical experts in the world</p></li>
              </ul>
            </Col>

            <Col lg={6}>
              <ul>
                <li><p>Developing nontechnical skills such as leadership, team building, and advocacy outside of the classroom that will ultimately determine success in the rest of our careers</p></li>
                <li><p>Informing students about the immense opportunities that are available on the UC Irvine campus, in the neighboring community, and throughout the world</p></li>
                <li><p>Creating partnerships between the academics of our campus and the related industries</p></li>
              </ul>
            </Col>
          </Row>

          <br></br>
          <div class="text-center">
            <Button variant="primary" size="lg" href="https://docs.google.com/document/u/1/d/e/2PACX-1vQupcAAOIoyS3EZOpPFuFhin1g4aVpITSgD4QXRgZAYxHtxSv4I5ToApD8JprDHOmoABY1qg81wuYZc/pub">
              Learn more through our constitution.
            </Button>
          </div>
        </Container>
      </section>

      <section class="bg-light u-content-space">
        <Container>
          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h1 mb-0">Our Member Clubs</h2>
          </header>

          <div className={styles.affiliates}>
            {
              Clubs.map(club => <Affiliate {...club} />)
            }
          </div>
        </Container>
      </section>
    </main>
  )
}
