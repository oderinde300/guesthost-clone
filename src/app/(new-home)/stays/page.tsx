import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import { TaxonomyType } from "@/data/types";
import SectionHero3 from "@/app/(server-components)/SectionHero3";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";

const page = () => {
  const DEMO_CATS: TaxonomyType[] = [
    {
      id: "1",
      href: "/listing-stay-map",
      name: "New Yourk",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      id: "2",
      href: "/listing-stay-map",
      name: "Singapore",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "3",
      href: "/listing-stay-map",
      name: "Paris",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "4",
      href: "/listing-stay-map",
      name: "London",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      id: "5",
      href: "/listing-stay-map",
      name: "Tokyo",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      id: "6",
      href: "/listing-stay-map",
      name: "Maldives",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "7",
      href: "/listing-stay-map",
      name: "Italy",
      taxonomy: "category",
      count: 188288,
      thumbnail:
        "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];
  return (
    <div>
      <SectionHero />
      <div className="container">
        <div className="container">
          <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 mt-8 ">
            {/* SECTION HERO */}
            {/* <SectionHero className="pt-10 lg:pt-16 lg:pb-16" /> */}

            {/* SECTION 1 */}
            <SectionSliderNewCategories categories={DEMO_CATS} />

            {/* <SectionOurFeatures /> */}
            <SectionGridFeaturePlaces listingType="shortlet" cardType="card2" />

            {/* <SectionOurFeatures /> */}
            <SectionGridFeaturePlaces
              listingType="event-venue"
              heading="See featured event venue"
              subHeading="Popular event venue that GuestnHost recommends for you"
              cardType="card2"
            />

            {/* <SectionOurFeatures /> */}
            <SectionGridFeaturePlaces
              listingType="automobile"
              heading="Browse featured automobile"
              subHeading="Popular automobile/cars that GuestnHost recommends for you"
              cardType="card2"
            />

            {/* <SectionHowItWork /> */}

            {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
          />
        </div> */}

            {/* <SectionSubscribe2 /> */}

            {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}

            {/* <SectionGridCategoryBox /> */}

            {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}

            {/* <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        /> */}

            {/* <SectionVideos /> */}

            {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default page;
