import CommitteesJSON from "../assets/data/committees.json";
import { Container } from "react-bootstrap";
import styles from "/styles/GetInvolved.module.scss";
import Image from "next/image";

function Committee(props) {
  const { name, short_desc, graphic } = props;
  return (
    <div className={styles.committee}>
      <Image src={graphic} alt={name} width={300} height={200} />
      <h5>{name}</h5>
      <p>{short_desc}</p>
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
          be apart of. {"Don't"} feel like committing too much time? {"Don't "}
          worry! Everyone can attend our meetings and workshops!
        </p>

        <div className={styles.oneContainer}>
          <h2>Our Newsletter</h2>
          <p>
            Sign up to recieve email updates on our events, promotions,
            announcements, and more!
          </p>

          <a
            href="https://icssc.link/ICSSCNewsletter"
            rel="noreferrer"
            target="_blank"
          >
            Sign Up Here
          </a>
        </div>

        <div className={styles.oneContainer}>
          <h2>Apply To Our Committees</h2>
          {/* <b>Applications are closed. Check back in Fall Quarter for recruitment.</b> */}
          <b>Applications are open!</b>
          <p> ICS Students can apply to any of the following committees.</p>
          <div className={styles.committeeContainer}>
            {CommitteesJSON.map((committee) => (
              <Committee {...committee} key={committee.name} />
            ))}
          </div>
        </div>

        <div className={styles.oneContainer}>
          <h2>The Bits & Bytes Program</h2>
          {/* <b>
            Applications are closed. Check back in Fall Quarter for recruitment.
          </b> */}
          <b>
            <a href="https://docs.google.com/spreadsheets/d/1U6If78kK7aEvHrwo-7_aZIbEl9BD60Ka4jJn5mSD1xg/edit#gid=0">
              Read Byte Intros Here!
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqhDUzTZsY4fGt9GIdSp1wm_DRxskmv_EYQwKCbGM-X1JREQ/viewform">
              Apply Here! Applications are due 10/22!
            </a>
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
              <Image
                src={"/assets/img/graphics/BeABitByte.png"}
                alt={"Be a Bit/Byte"}
                width={300}
                height={200}
              />
              <h3>Be a Bit/Byte</h3>
              <p>
                {"Here's"} your chance by applying to become a bit or byte! As a
                byte you are going to be the mentor, the role model, and most
                importantly of all, your best friend to your bit! As for bits,
                have fun!
              </p>
            </div>
            <div>
              <Image
                src={"/assets/img/graphics/JoinAFamily.png"}
                alt={"Join a Family"}
                width={300}
                height={200}
              />
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
            View Fellowship
          </a>
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
        </div>
      </div>
    </Container>
  );
}
