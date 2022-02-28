import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

import React from "react";
import Navigations from "../components/Navigations";
import Logo from "../components/Logo";
import SocialNetworks from "../components/SocialNetworks";

const Home = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CHARLES CANTIN PHOTOGRAPHE</title>
        <meta name="Evaluation STUDI" content="Site photo de Cantin" />
        <meta
          name="keywords"
          content="photographe, photo, album, mariage, couple, bébé, portrait, baptême,grossesse"
        />
        <meta name="author" content="Philippe BOUDINAUD" />
        <meta name="copyright" content="© PhilouLaudun Inc" />
        
      </Head>
      <main>
        {/*page principale */}
        <div className="home">
          {/*composants : logo, navigation, réseaux sociaux*/}
          <Navigations />
          <Logo />
          <SocialNetworks />
          {/*Image de fond */}
          <div className="bg-image"></div>
          {/*Contenu de la page */}
          <div className="home-main">
            <div className="main-content">
              <h1> Charles CANTIN</h1>
              <h2>Photographe</h2>
            </div>
            <h3>Mariage - Grossesse - Bébé - Famille - Baptême - Couple</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
