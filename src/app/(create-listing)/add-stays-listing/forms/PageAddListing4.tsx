"use client";
import React, { FC } from "react";
import Checkbox from "@/shared/Checkbox";
import NcInputNumber from "@/components/NcInputNumber";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { Controller, FieldError, FieldValues, useForm } from "react-hook-form";
import FormItem from "./FormItem";
import Input from "@/shared/Input";

export interface PageAddListing4Props {
  formData: any[];
  errors: any;
  control: any;
  register: any;
  handleSubmit: any;
  prevPageHandler: any;
  nextPageHandler: any;
  setFormData: any;
  watch: any;
  setError: any;
  selectedFeatures: any;
  setSelectedFeatures: any;
}

const PageAddListing4: FC<PageAddListing4Props> = ({
  formData,
  errors,
  control,
  register,
  handleSubmit,
  prevPageHandler,
  nextPageHandler,
  setFormData,
  watch,
  setError,
  selectedFeatures,
  setSelectedFeatures,
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Features </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          key features of the vehicle
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <form
        className="space-y-8"
        onSubmit={handleSubmit((data: any) => {
          setFormData({ ...formData, ...data });
          nextPageHandler();
        })}
      >
        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Key Features
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox
              label="Wifi"
              name="Wifi"
              defaultChecked={selectedFeatures.includes("Wifi")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Wifi");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Wifi"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Internet"
              name="Internet"
              defaultChecked={selectedFeatures.includes("Internet")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Internet");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Internet"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="TV"
              name="TV"
              defaultChecked={selectedFeatures.includes("TV")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("TV");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "TV"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Air conditioning"
              name="Air conditioning"
              defaultChecked={selectedFeatures.includes("Air conditioning")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Air conditioning");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Air conditioning"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Fan"
              name="Fan"
              defaultChecked={selectedFeatures.includes("Fan")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Fan");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Fan"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Private entrance"
              name="Private entrance"
              defaultChecked={selectedFeatures.includes("Private entrance")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Private entrance");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Private entrance"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Dryer"
              name="Dryer"
              defaultChecked={selectedFeatures.includes("Dryer")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Dryer");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Dryer"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Heater"
              name="Heater"
              defaultChecked={selectedFeatures.includes("Heater")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Heater");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Heater"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Detergent"
              name="Detergent"
              defaultChecked={selectedFeatures.includes("Detergent")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Detergent");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Detergent"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Clothes dryer"
              name="Clothes dryer"
              defaultChecked={selectedFeatures.includes("Clothes dryer")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Clothes dryer");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Clothes dryer"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Baby cot"
              name="Baby cot"
              defaultChecked={selectedFeatures.includes("Baby cot")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Baby cot");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Baby cot"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Desk"
              name="Desk"
              defaultChecked={selectedFeatures.includes("Desk")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Desk");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Desk"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
            <Checkbox
              label="Fridge"
              name="Fridge"
              defaultChecked={selectedFeatures.includes("Fridge")}
              onChange={(e: any) => {
                if (e === true) {
                  selectedFeatures.push("Fridge");
                } else {
                  const filteredArray = selectedFeatures.filter(
                    (element: string) => element !== "Fridge"
                  );
                  setSelectedFeatures(filteredArray);
                }
              }}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-5">
          <ButtonSecondary type="button" onClick={prevPageHandler}>
            Go back
          </ButtonSecondary>
          <ButtonPrimary type="submit">{"Continue"}</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default PageAddListing4;
