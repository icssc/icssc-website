import ProjectData from '../assets/data/projects.json';
import { Row, Col, Container, Card } from 'react-bootstrap';
import styles from '/styles/Projects.module.scss';

function Project(props) {
    const {img, name, desc, src, repo} = props
    return (
        <div className={`${styles.projectGrid}`}>
            <img
                src={img}
            />
            <div>
                <h4>{name}</h4>
                <p>{desc}</p>
                <a href={src} rel="noreferrer" target="_blank">
                    <button type='button'>View Project</button>
                </a>
                <a href={repo} rel="noreferrer" target="_blank">
                    <button type='button'>View Repo</button>
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <Container>
            <div className={styles.banner}>
            <h1>Projects</h1>
            
            <p>ICSSC offers development projects to benefit the UCI community. 
                Anyone is welcome to contribute to the projects at our <u><a href="https://github.com/icssc" rel="noreferrer" target="_blank">GitHub</a></u>.
            </p>
            
            </div>
            
            <div>
                <div>
                    {ProjectData.map((project, index) => <Project key={index} {...project}/>)}
                </div>
            </div>
        </Container>
    );
}