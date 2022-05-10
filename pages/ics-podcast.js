import { Col, Container, Row } from 'react-bootstrap'
import Podcasts from '../assets/data/podcasts.json'

function Podcast(props) {
  const {src, title, date, description} = props;

  return (
    <Container>
      <Row>
        <Col>
          <iframe 
            width="400" 
            height="225" 
            src={src} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </Col>
        <Col>
          <header>
            <h2 className="h2">{title}</h2>
            <p class="h5">{date}</p>
          </header>
          <p className="mb-4">
            {description}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default function ICSPodcast() {
  return (
    <>
      <h1>ICS Podcast</h1>
      <main role="main">
        <section className="bg-light u-content-space">
          <div className="container text-center">
            <p className="h5">
              Started in 2018, the ICS Podcast provides updates on ICSSC's activities
              in a new and creative fashion. Each episode features one or multiple board members discussing topics
              ranging from upcoming events to personal experiences. Check out the playlist here, and follow our
              Facebook page to stay updated for future episodes!
            </p>
          </div>
        </section>

        <section className="u-content-space">
          {Podcasts.map(podcast => <Podcast {...podcast} key={podcast.title}/>)}
        </section>
     </main>
    </>
  )
}