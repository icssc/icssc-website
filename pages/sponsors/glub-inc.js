import { Container } from 'react-bootstrap';
import styles from '/styles/PremiumSponsors.module.scss';
import SponsorsData from '../../assets/data/sponsors.json';

export default function Glub() {
  const sponsor = SponsorsData.find(item => item.id === "glub-inc");
  const { name, logo, link, description } = sponsor;

  return (
    <Container className={styles.company}>
      {/* <h1 className={styles.title}>{name}</h1> */}
      <div className={styles.logoContainer}>
        <img src={logo} alt={name}/>
      </div>
      <p>Glub, Inc. is the company behind the innovative social app, Glub. Founded with the mission of bringing friends closer together, Glub, Inc. focuses on creating shared spaces where users can connect, share moments, and build unique communities. Their commitment to privacy and user experience sets them apart, making Glub a go-to platform for creating both private and public groups. Whether it’s a secret Glub with your closest friends or a public Glub for broader connections, Glub, Inc. aims to enhance social interactions and foster meaningful relationships.</p>
      <div className={styles.bodyImage}>
        <img src={'/assets/img/sponsors/glub.gif'} alt={name} height={400}/>
      </div>
      <p>Glub - The Friends App, available exclusively on the App Store for iPhone users, offers a unique lifestyle experience. It features Secret Glub, allowing users to create private groups with their closest friends to share exclusive moments and explore monthly highlights. Additionally, the Public Glub enables the creation of public groups to share moments with a wider audience and discover groups worldwide, complete with monthly highlights. Reflecting each group's unique vibe, Glub is a space where memories come alive, all while respecting user privacy. It is compatible with iPhone, iPod touch, and Apple Vision.</p>
      <div className={styles.bodyImage}>
        <a
          href={link}
          target="_blank" rel="noreferrer"
          className={styles.visitLink}
          style={{backgroundColor:"#FF5374", color: "white"}}
        >
          Visit {name}
        </a>
      </div>
      
    </Container>
  );
}