import React from 'react';
import Image from 'next/image';
import Logoimage from "../public/img/LogoCantin - rond2.png";
const Logo = () => {
    return (
      <div className="logo">
        <Image
          src={Logoimage}
          alt="Logo"

        />
      </div>
    );}

export default Logo;
