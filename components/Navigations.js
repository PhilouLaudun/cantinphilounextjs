import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  // affichage de la navigation
  const router=useRouter()
  return (
    <div className="navigation">
      <ul>
        <li className={router.pathname == "/" ? "navactive" : ""}>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li className={router.pathname == "/PortFolio" ? "navactive" : ""}>
          <Link href="/PortFolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className={router.pathname == "/Prices" ? "navactive" : ""}>
          <Link href="/Prices">
            <a>Prestation</a>
          </Link>
        </li>

        <li className={router.pathname == "/Contact" ? "navactive" : ""}>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
