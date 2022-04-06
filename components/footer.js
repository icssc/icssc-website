import { FaDiscord, FaFacebook, FaInstagram, } from "react-icons/fa";

// TODO: Tooltip for Social Media Links
export default function Footer() {
  return (
    <footer class="bg-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 text-center text-md-left mb-3 mb-md-0">
            <small class="text-white">&copy; 2022 ICSSC. All Rights Reserved.</small>
          </div>

          <div class="col-md-4 align-self-center">
            <ul class="list-inline text-center text-md-right mb-0">
              <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Facebook">
                <a class="text-white" target="_blank" href="https://www.facebook.com/ICSStudentCouncil/">
                  <FaFacebook />
                </a>
              </li>
              <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Instagram">
                <a class="text-white" target="_blank" href="https://www.instagram.com/icssc.uci/">
                  <FaInstagram />
                </a>
              </li>
              <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Discord">
                <a class="text-white" target="_blank" href="/discord.html">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}