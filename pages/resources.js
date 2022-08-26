import ResourceData from '../assets/data/resources.json'
import { Container } from "react-bootstrap";

function Resource(props) {
  const { title, desc, src } = props;
  return (
      <Container className="text-center mb-5 mt-5">
        <h1>{title}</h1>
        <h5>{desc} <br/> Link: {src}</h5>
      </Container>
  )
}

export default function Resources() {
  return (
    <>
      <h1>Resources</h1>
      <h5 className="text-center">ICS Student Council provides you with these resources that can help you learn about ICS at UCI! </h5>
      {ResourceData.map(info => <Resource {...info} />)}
    </>
  )
}