import { Row, Col, Container, Card } from 'react-bootstrap';
import candidatesData from '../assets/data/candidates.json';
import styles from '/styles/Candidates.module.scss';

function Candidate(props) {
    const {name, email, year, major, statement, src} = props
    return (
        <div className={`${styles.candidateGrid}`}>
            <img
                src={src}
            />
            <div>
                <h4>{name}</h4>
                <h5>{email}</h5>
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
                <hr/>
                <p>Know who you're voting for?</p>
                <br />
                <a target="_blank" rel="noreferrer" href="https://icssc.link/election-voting-form">
                <button className='pinkButton' style={{marginTop: "10px"}} type="button">Cast your Vote</button></a>
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
            {/* Hard coding the new lines */}
            <div className={`${styles.candidateGrid}`}>
            <img
                src={'/assets/img/candidates/cand_nico.jpg'}
            />
            <div>
                <h4>Nicole Nguyen</h4>
                <h5>nicolvn1@uci.edu</h5>
                <p>
                    Hello! My name is Nicole, and I am running to be the 2024-2025 External Vice President of ICSSC. I am a third-year informatics major and have been in the club since my first year. I value the ICS community and wish to further my involvement as an active member of ICSSC. Building upon my connections with Hack at UCI and VenusHacks, I hope to also connect with other organizations and gather their diverse perspectives on how we can improve the community for members and organizers alike. Because every club is so unique, I want to learn from them and showcase the strengths of each as External Vice President.
                </p>
                <p>
                    As a member of the Events committee, I have experience coordinating events of various sizes, which will prepare me for planning collaborations between ICSSC and other organizations. When hosting events, I am able to adapt and am accustomed to working under pressure. Being the current Secretary, I am familiar with how ICSSC runs and am eager to learn more about what occurs on an executive level. Additionally, I was a mentor in the Bits and Bytes program where my co-byte and I created a welcoming environment for our bits, and I aspire to further spread inclusion throughout the ICS community.
                </p>
                <p>
                    Thank you for taking the time to read my candidate statement, and I hope you consider me for the role of External Vice President!
                </p>
            </div>
        </div>
        </Container>
    );
}