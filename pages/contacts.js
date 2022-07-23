import { FaFacebook, FaFacebookF } from "react-icons/fa";

export default function Contacts() {
  return (
    <>
      <h1>Contact Us</h1>
      <main role="main">
        <section class="container-fluid">
          <div class="row text-center u-icon-block">
            <div class="col-lg-3 u-icon-block__col">
              <span class="u-icon u-icon-primary u-icon--size--xl rounded-circle mb-4">
                <span class="fab fa-facebook u-icon__inner text-white"></span>
              </span>
              <h3 class="h5">Facebook</h3>
              <p class="mb-0"><a href="https://www.facebook.com/ICSStudentCouncil/">ICS Student Council</a></p>
            </div>

            <div class="col-lg-3 u-icon-block__col u-icon-block__col--left-brd">
              <span class="u-icon u-icon-primary u-icon--size--xl rounded-circle mb-4">
                <span class="fab fa-instagram u-icon__inner text-white"></span>
              </span>
              <h3 class="h5">Instagram</h3>
              <p class="mb-0"><a href="https://www.instagram.com/icssc.uci/">@icssc.uci</a></p>
            </div>

            <div class="col-lg-3 u-icon-block__col u-icon-block__col--left-brd">
              <span class="u-icon u-icon-primary u-icon--size--xl rounded-circle mb-4">
                <span class="fab fa-discord u-icon__inner text-white"></span>
              </span>
              <h3 class="h5">Discord</h3>
              <p class="mb-0"><a href="https://discord.gg/c4t5dGcM9S">ICSSC</a></p>
            </div>

            <div class="col-lg-3 u-icon-block__col u-icon-block__col--left-brd">
              <span class="u-icon u-icon-primary u-icon--size--xl rounded-circle mb-4">
                <span class="fas fa-envelope-open u-icon__inner text-white"></span>
              </span>
              <h3 class="h5">Email</h3>
              <p class="mb-0"><a href="mailto:icssc@uci.edu">icssc@uci.edu</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}