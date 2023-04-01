import InvolvedJSON from '../assets/data/get-involved.json';
import { Row, Col, Container, Button } from 'react-bootstrap';
import styles from "/styles/Election.module.scss";


function Committee(props) {
  const {name, desc} = props;
  return (
    <div className={styles.committee}>
      <h5>{name}</h5>
      <p className="">{desc}</p>
    </div>
  )
}

export default function GetInvolved() {
  return (
    <>
    <Container>
      <div className={styles.section}>
        <h1>Election</h1>
        <div className={styles.oneContainer}>
          <h2>Positions</h2>
          <b>Candidate declarations begin on Week 1, Monday and close on Friday at 11:59 PM.</b>
          <p>Note: Other board positions will be filled through application later in the quarter.<br/>Learn more about the roles through our <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/u/1/d/e/2PACX-1vTP7A3qVqX3ZXJ44WT7x4vhUsOWGBQMCenB4Ls76rUsJURfz8bJl0UIITJyKZWQJ-3-m7BB8RMKzvxB/pub"
        >constitution</a>.</p>
          <div className={styles.halfContainer}>
            <div>
              <h3>President</h3>
              <p>Chair all meetings of ICSSC, provide general oversight over all ICSSC activities, ensure that all tasks are completed, advise other leaders as needed, and hold all leaders accountable. A limit of two candidates may run as Co-Presidents.</p>
            </div>
            <div>
              <h3>Vice-President</h3>
              <p>Support the President in his duties and assume presidential duties if the current President is unable to perform, assist the President in his or her duties. The Vice President is also responsible for running the weekly meetings council wide meetings and attending the Representatives meeting.</p>
            </div>
          </div>

          <div className={styles.halfContainer}>
            <div>
              <h3>Internal</h3>
              <p>In charge of general communications inside the council and member retention.</p>
            </div>
            <div>
              <h3>External</h3>
              <p>In charge of communications with ICS clubs and the consortium.</p>
            </div>
          </div>
        </div>
      </div>
      
    </Container>
    <div className={styles.timeline}>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <h2>Week 1</h2>
              <p>ICS Student Council Elections Candidate declarations begin on Monday and close on Friday at 11:59 PM. ICS Student Council candidates are allowed to campaign after declarations close. </p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <h2>Week 2</h2>
              <p>All ICS Student Council Elections Declared Candidates must attend ICS Student Council’s Meeting on Wednesday (4/12/2023) at 7:00-8:00 PM in DBH 6011. ICSSC Declared Candidates are allowed to give a 2–3-minute introductory speech about themselves and their qualifications for their applicable position. The voting period will begin after all the speeches have finished.</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.content}>
              <h2>Week 3</h2>
              <p>Voting period closes on Friday at 11:59 PM.</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.content}>
              <h2>Week 4</h2>
              <p>Results of the ICSSC Elections are announced on Monday and posted on our social media as well as our website</p>
            </div>
          </div>
        </div>
    </>
  )
}