import ProjectData from '../assets/data/projects.json';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Image from "next/image";

function Project(props) {
    const {img, name, desc, src} = props
    return (
        <Col lg={6} md={12} className="mb-5 mt-5">
            <Card style={{ width: 'auto', height: '100%', borderRadius:"30px", boxShadow:"2px 4px 10px" }}>
                {/* <Card.Img variant="top" src={img_src} /> */}
                <Image
                style={{borderTopLeftRadius:"30px", borderTopRightRadius:"30px"}}
                height="300"
                width="300"
                src={img}/>
                <Card.Body>
                    <Card.Title>
                        <h2><a href={src} target="_blank">{name} ↗</a></h2>
                    </Card.Title>
                    <Card.Text>
                        <h5>{desc}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <Container>
                <Row className="justify-content-md-center">
                    {ProjectData.map(project => <Project {...project}/>)}
                </Row>
            </Container>
        </>
    );
}