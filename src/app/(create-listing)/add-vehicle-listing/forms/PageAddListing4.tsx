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
          </div>
          {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Wifi",
              "Internet",
              "TV",
              "Air conditioning",
              "Fan",
              "Private entrance",
              "Dryer",
              "Heater",
            ].map((feature) => (
              <Controller
                key={feature}
                render={({ field }) => (
                  <label className="">
                    <input
                      type="checkbox"
                      className="focus:ring-action-primary h-6 w-6 text-primary-500 border-primary rounded border-neutral-500 bg-white dark:bg-neutral-700  dark:checked:bg-primary-500 focus:ring-primary-500"
                      {...field}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setSelectedFeatures((prevFeatures: any) => {
                          if (isChecked) {
                            return [...prevFeatures, feature];
                          } else {
                            return prevFeatures.filter(
                              (item: any) => item !== feature
                            );
                          }
                        });
                      }}
                    />
                    <span className=" text-neutral-900 dark:text-neutral-100 ml-3.5">
                      {feature}
                    </span>
                  </label>
                )}
                control={control}
                name={feature}
                defaultValue={false}
              />
            ))}
          </div> */}
        </div>

        <FormItem label="Number of Seats">
          <Input
            placeholder="4"
            {...register("no_of_seats", {
              required: {
                value: true,
                message: "Number of seats is required", // Set your custom error message
              },
            })}
          />
          {errors?.no_of_seats && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.no_of_seats?.message}`}
            </p>
          )}
        </FormItem>
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
