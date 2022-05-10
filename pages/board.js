import Image from "next/image";
import { Col, Container } from "react-bootstrap";
import BoardMembers from '../assets/data/board.json'
import GraphicDesigners from '../assets/data/graphic-designers.json'


function BoardMember(props) {
  const { position, name, email, image } = props;
  console.log(image)
  return (
    <Col lg={6} key={email}>
      <h2 class="h2">{position}</h2>
      <Image
        src={`${image}`}
        height={200}
        width={200}
      />
      <h3 class="h5">{name}</h3>
      <h3 class="h5">{email}</h3>
    </Col>
  )
}

function Designer(props) {
  const { name, email, image } = props;
  return (
    <Col lg={6} key={email}>
      <Image
        src={image}
        height={200}
        width={200}
      />
      <h3 class="h5">{name}</h3>
      <h3 class="h5">{email}</h3>
    </Col>
  )
}

export default function Board() {
  return (
    <>
      <h1>Board Members</h1>
      <main role="main">

        <section class="text-center bg-light u-content-space">
          <Container>
            {BoardMembers.map(member => <BoardMember {...member} />)}
          </Container>

          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h2">Graphic Designers</h2>
          </header>
          <Container>
            {GraphicDesigners.map(designer => <Designer {...designer} />)}
          </Container>
        </section>

      </main >
    </>
  )
}