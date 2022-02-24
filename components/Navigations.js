import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';



const Navigation = () => { // affichage de la navigation
const [router, setRouter] = useState("/");
const Navactive = () => {
  setRouter(useRouter);
}

    return (
      <div className="navigation">
        <ul>
          <li className={router.pathname == "/" ? "navactive" : ""}>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className={router.pathname == "/" ? "navactive" : ""}>
            <Link href="/Prices">
              <a>Prestation</a>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Navigation;
