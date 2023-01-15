import CommitteesJSON from '../assets/data/committees.json';
import { Container } from 'react-bootstrap'
import styles from '/styles/Committees.module.scss'

function Committee(props) {
  const {name, desc, members} = props;
  return (
    <div className={styles.committee}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <>
        <div>
          {members.map(member => <p key={member}>{member}</p>)}
        </div>
      </>
    </div>
  )
}

export default function Committees() {
  return (
    <Container>
      <div className={styles.banner}>
      <h1>Committees</h1>
        <p>ICS Student Council has five committees to provide different ways for students to contribute to the community. </p>
      </div>
      {CommitteesJSON.map(committee => <Committee {...committee}/> )}
    </Container>
  )
}