import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeroSearchFormSmall from "../(client-components)/(HeroSearchFormSmall)/HeroSearchForm2";
import StaySearchForm from "../(client-components)/(HeroSearchForm2Mobile)/(stay-search-form)/StaySearchForm";
import ExperiencesSearchForm from "../(client-components)/(HeroSearchForm)/(experiences-search-form)/ExperiencesSearchForm";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    // <div
    //   className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    // >
    //   <div className="flex flex-col lg:flex-row lg:items-center">
    //     <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
    //       <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
    //         Serviced apartment, car & event venues
    //       </h2>
    //       <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
    //         Explore with GuestsnHost: Apartments, Cars, Event Venues - Book
    //         hassle-free for a memorable journey.
    //       </span>
    //       <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
    //         Start your search
    //       </ButtonPrimary>
    //     </div>
    //     <div className="flex-grow">
    //       <Image className="w-full" src={imagePng} alt="hero" priority />
    //     </div>
    //   </div>

    //   <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
    //     <HeroSearchForm />
    //   </div>
    // </div>

    <div className="h-screen w-full bg-home-3 bg-cover flex justify-center items-center">
      <div
        className={`HeroSearchFormSmall ${className}`}
        data-nc-id="HeroSearchFormSmall"
      >
        {/* {renderTab()} */}
        <div className="">
          {/* <StaySearchForm /> */}
          <ExperiencesSearchForm />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
