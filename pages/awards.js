import AwardsJSON from '../assets/data/awards.json';
import { Container, Row, Col } from 'react-bootstrap';

function Award(props) {
  const {name, titles, providers} = props;
  return (
    <Container className="text-center">
      <h2 className="h1">{name}</h2>
      <Row lg={2}>
        {Object.keys(titles).map((key, ind) => {
          return (
            <Col lg={6}>
              <div key={ind}>
                <h5 className="mt-3" key={titles}>{titles[key]}</h5>
                <p key={providers}>{providers[key]}</p> 
                </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  )
}

export default function Awards() {
  return (
    <>
      <h1>Awards & Recognitions</h1>
      <main role="main">
        {AwardsJSON.map(award => <Award {...award}/> )}
      </main>
    </>
  );
}