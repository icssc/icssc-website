import { Container } from 'react-bootstrap';
import { FaDiscord, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import styles from '/styles/Contact.module.scss';



export default function Contacts() {
  return (
    <Container>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactContainer}>
          <a href="https://www.facebook.com/ICSStudentCouncil/">
            <div className={styles.contactCard}>
              <FaFacebook size={50} />
              <h3 className="h5">Facebook</h3>
              <p>ICSStudentCouncil</p>
            </div>
          </a>
          <a href= "https://www.instagram.com/icssc.uci/">
            <div className={styles.contactCard}>
              <FaInstagram size={50} />
              <h3 className="h5">Instagram</h3>
              <p>@icssc.uci</p>
            </div>
          </a>
          <a href="https://discord.gg/c4t5dGcM9S">
            <div className={styles.contactCard}>
              <FaDiscord size={50} />
              <h3 className="h5">Discord</h3>
              <p>ICSSC</p>
            </div>
          </a>
          <a href="mailto:icssc@uci.edu">
            <div className={styles.contactCard}>
              <FaEnvelope size={50} />
              <h3 className="h5">Email</h3>
              <p>icssc@uci.edu</p>
            </div>
          </a>
        </div>
    </Container>
  )
}
