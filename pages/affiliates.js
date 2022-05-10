import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import Clubs from '../assets/data/clubs.json'

function Affiliate(props) {
  const { logo, id, name, description, website } = props;
  return (
    <section class="bg-light u-content-space" id={id} key={id}>
      <Container>
        <Row>
          <Col lg={6}>
            <a href={website}>
              <Image
                src={logo}
                alt={`${name} Logo`}
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

export default function Affiliates() {
  return (
    <>
      <h1>Affiliates</h1>
      <main role="main">
        <header class="text-center w-md-50 mx-auto mb-8">
          <h2 class="h1">Member Clubs</h2>
          <p class="h6 text-uppercase u-letter-spacing-sm mb-0">Join one today!</p>
        </header>

        {Clubs.map(club => <Affiliate {...club} key={club.id}/>)}
      </main>
    </>
  )
}