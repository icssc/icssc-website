import { Container } from 'react-bootstrap';
import styles from '/styles/PremiumSponsors.module.scss';
import SponsorsData from '../../assets/data/sponsors.json';

export default function Northrup() {
  const sponsor = SponsorsData.find(item => item.id === "northrup-grumman");
  const { name, logo, link, description } = sponsor;

  return (
    <Container className={styles.company}>
      {/* <h1 className={styles.title}>{name}</h1> */}
      <div className={styles.logoContainer}>
        <img src={logo} alt={name}/>
      </div>
      <p>Northrop Grumman is a leading American aerospace and defense company formed in 1994 through the merger of Northrop Corporation and Grumman Corporation. It specializes in various sectors, including aerospace systems, mission systems, technology services, and innovation systems. The company is known for its technological innovations such as the B-2 Spirit stealth bomber and significant contributions to space exploration with projects like the James Webb Space Telescope. Northrop Grumman's advancements in autonomous systems, cybersecurity, and defense capabilities have cemented its position as a critical player in national and global security.</p>
      <div className={styles.bodyImage}>
        <img src={'/assets/img/sponsors/b2.jpg'} alt={name}/>
      </div>
      <p>The company's prominence is bolstered by its robust financial performance and strategic importance. As one of the largest defense contractors worldwide, Northrop Grumman plays a vital role in maintaining military readiness and technological superiority for the United States. Its continuous investment in research and development ensures it remains at the forefront of innovation. Recognition through numerous industry awards and its ability to attract and develop top talent further underscores its status as one of the greatest companies in the aerospace and defense sector.</p>
      <div className={styles.bodyImage}>
        <a
          href={link}
          target="_blank" rel="noreferrer"
          className={styles.visitLink}
          style={{backgroundColor:"#00269A", color: "white"}}
        >
          Visit {name}
        </a>
      </div>
      
    </Container>
  );
}