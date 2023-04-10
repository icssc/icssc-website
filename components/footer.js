import { FaDiscord, FaFacebook, FaInstagram, } from "react-icons/fa";

// TODO: Tooltip for Social Media Links
export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center text-md-left mb-3 mb-md-0">
            <small className="text-white">&copy; 2023 ICSSC. All Rights Reserved.</small>
          </div>

          <div className="col-md-4 align-self-center">
            <ul className="list-inline text-center text-md-right mb-0">
              <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Facebook">
                <a className="text-white" target="_blank" title="Facebook" href="https://www.facebook.com/ICSStudentCouncil/">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Instagram">
                <a className="text-white" target="_blank" title="Instagram" href="https://www.instagram.com/icssc.uci/">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Discord">
                <a className="text-white" target="_blank" title="Discord" href="https://discord.gg/c4t5dGcM9S">
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