import InvolvedJSON from "../assets/data/get-involved.json";
import { Container } from "react-bootstrap";
import styles from "/styles/GetInvolved.module.scss";

function Committee(props) {
  const { name, desc } = props;
  return (
    <div className={styles.committee}>
      <h5>{name}</h5>
      <p className="">{desc}</p>
    </div>
  );
}

export default function GetInvolved() {
  return (
    <Container>
      <div className={styles.section}>
        <h1>Get Involved in ICSSC</h1>
        <p>
          ICSSC offers a variety of committees and programs that any student can
          be apart of. Don&apos;t feel like committing too much time? Don&apos;t
          worry! Everyone can attend our meetings and workshops!
        </p>

        <div className={styles.oneContainer}>
          <h2>The Bits & Bytes Program</h2>
          <b>
            Applications are closed. Check back in Fall Quarter for recruitment.
          </b>
          <p>
            Bits & Bytes is a year long mentorship program organized by ICS
            Student Council at UC Irvine to help new ICS students transition to
            life at UCI through organized socials! Group leaders, aka Bytes,
            will guide and provide a community at UCI for incoming freshmen and
            transfers, aka Bits.
          </p>

          <div className={styles.halfContainer}>
            <div>
              <h3>Be a Bit/Byte</h3>
              <p>
                Here&apos;s your chance by applying to become a bit or byte! As
                a byte you are going to be the mentor, the role model, and most
                importantly of all, your best friend to your bit! As for bits,
                have fun!
              </p>
            </div>
            <div>
              <h3>Join a Family</h3>
              <p>
                In a Bits & Byte Fam, there are 2 bytes with 2-6 bytes each!
                Stay connected with the ICS community through events that
                promote academic success and community bonding
              </p>
            </div>
          </div>
        </div>

        <div className={styles.oneContainer}>
          <h2>The Fellowship Program</h2>
          <p>
            The Fellowship is an asynchronous web development crash course that
            teaches fundamental software development skills. By the end of the
            course, students will have the skillset necessary to create their
            own React websites and will have the opportunity to contribute to
            one our ICSSC Projects such as AntAlmanac, PeterPortal, or
            Zotistics!
          </p>

          <a
            href="https://fellowship.icssc.club/"
            rel="noreferrer"
            target="_blank"
          >
            View Fellowship {">"}
          </a>
        </div>

        <div className={styles.oneContainer}>
          <h2>Apply To Our Committees</h2>
          <b>
            Applications are closed. Check back in Fall Quarter for recruitment.
          </b>
          <p> ICS Students can apply to any of the following committees.</p>
          <div className={styles.committeeContainer}>
            {InvolvedJSON.map((committee) => (
              <Committee {...committee} key={committee.name} />
            ))}
          </div>
        </div>

        <div className={styles.oneContainer}>
          <h2>Apply to Our Board</h2>
          <b>
            Applications are closed. Check back in Spring Quarter for
            applications.
          </b>
          <em>
            Running for President, Internal VP, or External VP, requires that
            you have already been a full-member for Fall, Winter, and Spring
            Quarter.
          </em>
          <p>
            With ICSSC being a large organization, board serves to hold the club
            together. We lead the committees and take care of club-wide
            logistics. ICSSC provides the following board roles:
          </p>
        </div>
      </div>
    </Container>
  );
}
