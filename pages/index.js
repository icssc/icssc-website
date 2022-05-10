import Image from 'next/image'
import Sponsors from '../assets/data/sponsors.json'

function SponsorLogo(props) {
  const { id, logo, name } = props;

  return (
    <div>
      <a href={`sponsors.html#${id}`}>
        <Image 
          src={logo} 
          alt={`${name} Logo`}
          height={120}
          width={120}
        />
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section class="js-parallax u-promo-block u-promo-block--mheight-600 u-overlay u-overlay--dark text-white">
        <div class="container u-overlay__inner u-ver-center u-content-space">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="text-center">
                <p class="text-uppercase u-letter-spacing-sm mb-0">ICS Student Council</p>
                <h1 class="display-sm-4 display-lg-3 mb-3"><span class="js-display-typing"></span> students.</h1>
                <a class="btn btn-lg btn-primary btn--pill mb-md-0 mb-3 mx-2" href="#js-scroll-to-section">
                  <i class="far fa-calendar"></i> Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="u-content-space">
        <div class="container">
          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h1">About Us</h2>
          </header>

          <div class="row text-center justify-content-center">
            <div class="col-lg-10">
              <p>
                ICS Student Council was founded by students to better serve the
                ICS student body. We work to improve the lives of the students
                professionally, socially, and academically and deepen the connections
                students have with the Donald Bren School of Information and Computer Sciences
                and UCI Alumni.
              </p>

            </div>
          </div>
        </div>
      </section>


      <section class="u-content-space" id="js-scroll-to-section">
        <div class="container">
          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h1">Event Calendar</h2>
            <p class="h5">Check out our upcoming events below!</p>
          </header>

          <div class="row text-center justify-content-center">
            <div class="col-lg-10">
              <div id='calendar'></div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light u-content-space">
        <div class="container">
          <header class="text-center w-md-50 mx-auto mb-8">
            <h2 class="h1">Thanks to Our Sponsors</h2>
          </header>

          <div class="js-clients-2 u-clients mb-4">
            {Sponsors.map(sponsor => <SponsorLogo {...sponsor} key={sponsor.id}/>)}
            <div>
              <a href="sponsors.html#ardent">
                {/* <img class="u-clients__image" src="assets/img/sponsors/ardent-labs.jpg" alt="Ardent Labs Logo"> */}
              </a>
            </div>
            <div>
              <a href="sponsors.html#deloitte">
                {/* <img class="u-clients__image" src="assets/img/sponsors/deloitte-logo.jpg" alt="Deloitte Logo"> */}
              </a>
            </div>
            <div>
              <a href="sponsors.html#neudesic">
                {/* <img class="u-clients__image" src="assets/img/sponsors/neudesic-square.png" alt="Neudesic Logo"> */}
              </a>
            </div>
            <div>
              <a href="sponsors.html#wolfram">
                {/* <img class="u-clients__image" src="assets/img/sponsors/wolframlogo.png" alt="Wolfram Logo"> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
