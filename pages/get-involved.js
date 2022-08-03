import InvolvedJSON from '../assets/data/get-involved.json';
import { Row, Col, Container, Button } from 'react-bootstrap';


function Committee(props) {
  const {name, desc} = props;
  return (
    <Col lg={3} className="mb-5 mb-lg-0">
      <h3 className="h5">{name}</h3>
      <p className="">{desc}</p>
    </Col>
  )
}

export default function GetInvolved() {
  return (
    <>
      <h1>Join Our Committees</h1>
      <main role="main">
        <Container className="text-center u-content-space">
          <Container>
            <header>
              <h1>Apply to Our Committees</h1>
              <h5>Students of ICS can apply to any of the following committees.</h5>
            </header>
            <Row className="text-center justify-content-sm-center">
              {InvolvedJSON.map(committee => <Committee {...committee}/>)}
            </Row>
          </Container>
          <div className="text-center">
            <Button size="lg" href="committees.html">Learn more about the committees</Button>
          </div>
        </Container>
        <section className="text-center bg-light u-content-space mt-5">
          <h2><a href="https://bit.ly/ICSSCCommitteeApps21">Click Here to Apply for the 2021-2022 year!</a></h2>
        </section>
      </main>
    </>
  )
}