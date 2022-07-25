import Image from 'next/image'
import Sponsors from '../assets/data/sponsors.json'
import Sections from '../assets/data/index-sections.json'
import { Col, Container, Row, Button } from 'react-bootstrap';

function TitleBanner(props) {
  return (
    <>
      <Container className="text-center">
        <h4>ICSSC Student Council</h4>
        <h1>For Students. By Students</h1>
        <Button variant="primary" size="lg">Events</Button>
      </Container>
    </>
  )
}

function Section(props) {
  const { title, desc } = props;

  return (
    <Container className="text-center w-md-50 mx-auto mb-8">
      <h1>{title}</h1>
      <Row className="justify-content-center">
        <Col lg={10}>
          <p>{desc}</p>
        </Col>
      </Row>
    </Container>
  )
}

function SponsorLogo(props) {
  const { id, logo, name } = props;

  return (
    <>
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
    </>
  )
}

export default function Home() {
  return (
    <>
      <br></br>
      <TitleBanner/>
      {Sections.map(section => <Section {...section} key={section.title}/>)}
      
      <Container>
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
