import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import SponsorsData from '../assets/data/sponsors.json';

function Sponsor(props) {
  const {id, name, description, link, logo} = props;

  return (
    <section id={id}>
      <Container>
        <Row>
          <Col lg={6}>
            <a href={link}>
              <Image 
                src={logo}
                alt={`${name} logo`}
                height={300}
                width={300}
              />
            </a>
          </Col>
          <Col lg={6}>
            <header>
              <h2>{name}</h2>
            </header>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default function Sponsors() {
  return (
    <>
      <h1>Sponsors</h1>
      <main>
        <Container>
          <header>
            <h2>Our 2020 Sponsors</h2>
          </header>
          {SponsorsData.map(sponsor => <Sponsor {...sponsor}/>)}
        </Container>
      </main>
    </>
  )
}