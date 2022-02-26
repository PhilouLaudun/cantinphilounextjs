import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  // affichage de la navigation
  const [router, setRouter] = useState("/");
  const Navactive = () => {
    setRouter(useRouter);
    console.log(router);
  };

  return (
    <div className="navigation">
      <ul>
        <li className={router.pathname == "/" ? "navactive" : ""}>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>

        <li className={router.pathname == "/prices" ? "navactive" : ""}>
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
