import React from 'react';
import Logo from '../components/Logo';
import Navigations from '../components/Navigations';
import SocialNetworks from '../components/SocialNetworks'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <main>
      {/*page principale */}
      <div className="contact">
        {/*composants : logo, navigation, réseaux sociaux*/}
        <Navigations />
        <Logo />
        <SocialNetworks />
        {/*Contenu de la page */}
        {/*Formulaire */}
        <ContactForm />
        {/* Adresse, téléphone, email */}
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>12 rue du code </p>
              <p>34000 MONTPELLIER</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone </h4>
              <p>04 67 66 66 66 </p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email </h4>
              <p>charles.cantin@orange.fr</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

