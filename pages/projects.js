import ProjectData from '../assets/data/projects.json';
import { Row, Col, Container, Card } from 'react-bootstrap';

function Project(props) {
    const {img, name, desc, src} = props
    return (
        <Col lg={5} md={12} className="p-4">
            <Card style={{ width: 'auto', height: '100%', borderRadius:"30px", boxShadow:"2px 4px 10px" }}>
                <img
                style={{borderTopLeftRadius:"30px", borderTopRightRadius:"30px"}}
                height="auto"
                width="auto"
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
            <Container fluid>
                <Row className="justify-content-md-center">
                    {ProjectData.map(project => <Project {...project}/>)}
                </Row>
            </Container>
        </>
    );
}