import { Row, Col, Container, Card } from "react-bootstrap";
import { CANDIDATES_DATA } from "../assets/data/candidates.jsx";
import styles from "/styles/Candidates.module.scss";

function Candidate(props) {
  const { name, email, year, major, statement, src } = props;
  return (
    <div className={`${styles.candidateGrid}`}>
      <img src={src} />
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
        {/* <hr />
        <p>Know who you&apos;re voting for?</p>
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icssc.link/election-voting-form"
        >
          <button
            className="pinkButton"
            style={{ marginTop: "10px" }}
            type="button"
          >
            Cast your Vote
          </button>
        </a> */}
      </div>
      <hr />
      <h2>President</h2>
      {CANDIDATES_DATA.president.map((candidate, index) => (
        <Candidate key={index} {...candidate} />
      ))}

      <hr />
      <h2>Internal Vice President</h2>
      {CANDIDATES_DATA.ivp.map((candidate, index) => (
        <Candidate key={index} {...candidate} />
      ))}

      <hr />
      <h2>External Vice President</h2>
      {CANDIDATES_DATA.evp.map((candidate, index) => (
        <Candidate key={index} {...candidate} />
      ))}
    </Container>
  );
}
