import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialNetworks = () => { //affichage des icones des réseaux sociaux

    return (
      <div className="social-network">
        <ul className="content">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <li>
              <FontAwesomeIcon icon={faFacebookF} className="iconeimage" />
            </li>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </a>
        </ul>
      </div>
    );
};
export default SocialNetworks;