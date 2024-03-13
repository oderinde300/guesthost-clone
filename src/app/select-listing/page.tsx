"use client";
import React, { FC, useEffect, useState } from "react";
import Select from "@/shared/Select";
import FormItem from "../add-listing/FormItem";

import ButtonPrimary from "@/shared/ButtonPrimary";
import { Route } from "next";
// import { ListingCategoryInterface } from "@/interfaces";

export interface PageAddListing1Props {}

const Page: FC<PageAddListing1Props> = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [displayListing, setDisplayListing] = useState<string>("");

  useEffect(() => {
    switch (selectedValue) {
      case "/add-stays-listing/1":
        setDisplayListing("Stays");
        break;
      case "/add-event-listing/1":
        setDisplayListing("Event Halls");
        break;
      case "/add-vehicle-listing":
        setDisplayListing("Vehicles");
        break;
      default:
        setDisplayListing("");
    }
  }, [selectedValue]);

  let listingRoute = selectedValue as Route;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className="space-y-11">
        {/* --------------------- */}
        <div className="listingSection__wrap ">
          {" "}
          <>
            <h2 className="text-2xl font-semibold">Choose listing category</h2>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            {/* FORM */}
            <div className="space-y-8">
              {/* ITEM */}

              <FormItem
              // label="Select listing"
              // desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included."
              >
                <Select value={selectedValue} onChange={handleSelectChange}>
                  <option value="" disabled>
                    Select listing
                  </option>

                  <option value="/add-stays-listing/1">Stays</option>
                  <option value="/add-event-listing/1">Event Halls</option>
                  <option value="/add-vehicle-listing">Vehicles</option>
                </Select>
              </FormItem>
            </div>
          </>
          <p>{displayListing}</p>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          {selectedValue && (
            <ButtonPrimary href={listingRoute}>Continue</ButtonPrimary>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
