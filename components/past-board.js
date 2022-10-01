import { Container } from 'react-bootstrap'
import PastBoards from '../assets/data/past-boards.json'

export default function BoardYear(props) {
  const { year, positions } = props;
  return (
    <Container>
      <div>
        <h3 className="text-center">{year}</h3>
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
