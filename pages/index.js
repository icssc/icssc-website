import Image from 'next/image'
import Sponsors from '../assets/data/sponsors.json'
import { Col, Container, Row, Button } from 'react-bootstrap';

function TitleBanner(props) {
  return (
    <Container className="text-center">
      <h4>ICSSC Student Council</h4>
      <h1>For Students. By Students</h1>
      <Button variant="primary" size="lg">Events</Button>
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
      <br></br>
      <TitleBanner/>
      <Container className="text-center">
        
        <h2>About Us</h2>
        <p>
          ICS Student Council was founded by students to better serve the
          ICS student body. We work to improve the lives of the students
          professionally, socially, and academically and deepen the connections
          students have with the Donald Bren School of Information and Computer Sciences
          and UCI Alumni.
        </p>

        <h2>Event Calander</h2>
        <p>
          Check out our upcoming events!
        </p>

        <Row className="justify-content-center">
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
