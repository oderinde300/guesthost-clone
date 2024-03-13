import React from "react";
import SectionHero2 from "@/app/(server-components)/SectionHero2";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

const page = () => {
  return (
    <div>
      <SectionHero2 />
      <div className="container">
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default page;
