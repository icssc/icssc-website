import ProjectData from '../assets/data/projects.json';
import { Row, Col, Container, Card } from 'react-bootstrap';
import styles from '/styles/Projects.module.css';

function Project(props) {
    const {img, name, desc, src} = props
    return (
        <div className={`${styles.projectBox}`} style={{margin:"10px"}}>
            <img
                src={'https://cdn.discordapp.com/attachments/780314631041318933/1014359489819971604/Zotistics_Logo_Banner.png'}
            />
            <h4 style={{marginTop:"10px", fontWeight:"600"}}>
                <a target="_blank" href={src}>{name} ↗</a>
            </h4>
            <p>{desc}</p>
        </div>
    );
}

export default function Projects() {
    return (
        <>
            <br></br>
            <h4 className="text-center">Anyone is welcome to contribute to our projects! Checkout our <a href="https://github.com/icssc">GitHub to start contributing!</a></h4>
            <h1>Projects</h1>
            <div className={`${styles.sectionProjects} `}>
                <div className={`${styles.projectGrid}`}>
                    {ProjectData.map((project, index) => <Project key={index} {...project}/>)}
                </div>
            </div>
        </>
    );
}