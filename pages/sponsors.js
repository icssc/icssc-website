import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import SponsorsData from "../assets/data/sponsors.json";

function Sponsor(props) {
  const { id, name, description, link, logo } = props;

  return (
    <div id={id}>
      <>
        <Row className="mb-5">
          <Col lg={6} className="align-self-center">
            <a href={link}>
              <Image
                src={logo}
                alt={`${name} logo`}
                width={300}
                height={150}
                objectFit="contain"
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
      </>
    </div>
  );
}

export default function Sponsors() {
  return (
    <Container>
      <div className="banner">
        <h1>Sponsors</h1>
      </div>
      <h2>Our 2020 Sponsors</h2>
      {SponsorsData.map((sponsor) => (
        <Sponsor {...sponsor} key={sponsor.name} />
      ))}
    </Container>
  );
}
