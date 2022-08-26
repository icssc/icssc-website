import Image from "next/image";
import { Col, Container, Row, Button } from "react-bootstrap";
import EventsData from '../assets/data/events.json';

function Event(props) {
  const {src, title, time, desc, isCurrent, rsvp_src} = props;
  return (
    <Container className="pt-5 pb-5 mt-5 mb-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <Image
            className="rounded"
            objectFit={"contain"}
            src={src}
            alt={`${title} image`}
            height={400}
            width={400}
          />
        </Col>
        <Col lg={6}>
          <Container>
            <h1 className="mb-4">{title}</h1>
            <h5 className="mb-4">{time}</h5>
            <p>{desc}</p>
            {isCurrent && 
                <Button size="lg" href={rsvp_src}>RSVP</Button>
            }
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default function Events() {
  return (
    <>
      <h1>Events</h1>
      <h1 className="text-center">Current Events</h1>
      {<p className="text-center">No current events! Stay tuned for more :)</p>}
      {/* EventsData["current"].map(current => <Event {...current} isCurrent={true}/>) */}

      <h1 className="text-center mt-5 pt-5">Past Events</h1>
      {EventsData["past"].map(past => <Event {...past} isCurrent={false}/>)}
    </>
  )
}