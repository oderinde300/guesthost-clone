import React from "react";
import Image from "next/image";
import logo3 from "@/images/guestnhost.png";

const LogoSvgLight = () => {
  return (
    <>
      <Image className="hidden dark:block" src={logo3} alt="logo3" />
    </>
  );
};

export default LogoSvgLight;
