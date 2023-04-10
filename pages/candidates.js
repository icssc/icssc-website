import { Row, Col, Container, Card } from 'react-bootstrap';
import candidatesData from '../assets/data/candidates.json';
import styles from '/styles/Candidates.module.scss';

function Candidate(props) {
    const {name, email, statement, src} = props
    return (
        <div className={`${styles.candidateGrid}`}>
            <img
                src={src}
            />
            <div>
                <h4>{name}</h4>
                <p>{statement}</p>
            </div>
        </div>
    );
}

export default function Candidates() {
    return (
        <Container className={styles.container}>
            <div className={styles.banner}>
              <h1>Candidates</h1>
            </div>
            <hr/>
            <h2>President</h2>
            {candidatesData.president.map((candidate, index) => <Candidate key={index} {...candidate}/>)}
            
            <hr/>
            <h2>Internal Vice President</h2>
            {candidatesData.ivp.map((candidate, index) => <Candidate key={index} {...candidate}/>)}

            <hr/>
            <h2>External Vice President</h2>
            {candidatesData.evp.map((candidate, index) => <Candidate key={index} {...candidate}/>)}

        </Container>
    );
}