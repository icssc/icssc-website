import AwardsJSON from '../assets/data/awards.json';
import { Container, Row, Col } from 'react-bootstrap';

function Section(props) {
  const {title, provider} = props;
  return (
    <Col md={6}>
      <h5>{props.title}</h5>
      <p>{props.provider}</p>
    </Col>
  )
}

export default function Awards() {
  return (
    <>
      <h1>Awards & Recognitions</h1>
      <Container className="text-center" role="main">
        <h2>Awards</h2>
        <Row>
        {AwardsJSON["awards"].map(award => <Section {...award}/>)}
        </Row>
        <h2>Recognitions</h2>
        <Row>
          {AwardsJSON["recognitions"].map(rec => <Section {...rec}/>)}
        </Row>
      </Container>
    </>
  );
}
