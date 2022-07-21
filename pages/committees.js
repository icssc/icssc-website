import CommitteesJSON from '../assets/data/committees.json'
import {Container } from 'react-bootstrap';


function Committee(props) {
  const {name, desc, members} = props;
  return (
    <Container className="justify-content-md-center text-center">
      <h2 className="h1">{name}</h2>
      <p className="h5 mb-0">{desc}</p>
      <br/>
      <Container>
        <h3>{name} Members</h3>
        <div>
          {members.map(member => <p key={member}>{member}</p>)}
        </div>
      </Container>
    </Container>
  )
}

export default function Committees() {
  return (
    <>
      <h1>Committees</h1>
      <main role="main">
        <section class="container u-content-space u-bg-arrow-wrapper">
          <div class="text-center u-bg-arrow-bottom">
            <p class="h5 mb-0">ICS Student Council has five committees to provide different ways for students to contribute to the community. </p>
          </div>
        </section>
        {CommitteesJSON.map(committee => <Committee {...committee}/> )}
      </main>
    </>
  )
}