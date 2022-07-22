import ContactsJSON from '../assets/contacts.json';
import { Row, Col } from 'react-bootstrap';

function Contact(props) {
  const {media, name, src} = props;
  return (
    <Col md={2}>
      <h3 className="h5">{media}</h3>
      <p className=""><a href={src}>{name}</a></p>
    </Col>
  )
}

export default function Contacts() {
  return (
    <>
      <div>
        <h1>Contact Us</h1>
      </div>
      <main role="main">
        <Row className="text-center justify-content-sm-center">
          {ContactsJSON.map(contact => <Contact {...contact}/>)}
        </Row>
      </main>
      
    </>
  )
}