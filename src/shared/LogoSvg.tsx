import React from "react";
import Image from "next/image";
import logo3 from "@/images/guestnhost.png";

const LogoSvg = () => {
  return (
    <>
      <Image width={200} height={100} className="dark:block" src={logo3} alt="logo3" />
    </>
  );
};

export default LogoSvg;
