import { Container } from 'react-bootstrap'
import PastBoards from '../assets/data/past-boards.json'

function BoardYear(props) {
  const { year, positions } = props;
  return (
    <Container>
      <div>
        <h2>{year}</h2>
        <ul>
          {positions.map(position => {
            const {title, name} = position
            return (
              <li>
                <b>{title}: </b>
                {name}
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

export default function PastBoard() {
  return (
    <>
      <h1>Past Board Members</h1>
      <main role="main">
        {PastBoards.map(board => <BoardYear {...board}/>)}
      </main>
    </>
  )
}