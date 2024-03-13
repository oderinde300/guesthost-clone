"use client";

import NcInputNumber from "@/components/NcInputNumber";
import React, { FC, useEffect, useState } from "react";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import Input from "@/shared/Input";
import { dataParser } from "./PageAddListing2";
import { Controller, useForm } from "react-hook-form";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageAddListing3Props {}

const PageAddListing3: FC<PageAddListing3Props> = () => {
  const vehicleListingData3 = localStorage.getItem("vehicleListingData3");
  // const vehicleListingData = localStorage.getItem("vehicleListingData");

  const [initialdata, setInitialData] = useState<any>({});
  useEffect(() => {
    setInitialData(dataParser("vehicleListingData3"));
    // console.log(dataParser("vehicleListingData"));
  }, [vehicleListingData3]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      year_of_manufacture: "",
      color: "",
      interior_color: "",
      condition: "",
      ...initialdata,
    },
  });

  return (
    <>
      <h2 className="text-2xl font-semibold">Condition</h2>

      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <form
        className="space-y-8"
        onSubmit={handleSubmit((data) => {
          // console.log(data);
          localStorage.setItem("vehicleListingData3", JSON.stringify(data));
        })}
      >
        <FormItem label="Year of manufactore">
          <Input
            placeholder="2023"
            {...register("year_of_manufacture", {
              required: {
                value: true,
                message: "Year of manufacture is required", // Set your custom error message
              },
            })}
          />
          {errors?.year_of_manufacture && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.year_of_manufacture?.message}`}
            </p>
          )}
        </FormItem>
        <FormItem label="Color">
          <Input
            placeholder="Red"
            {...register("color", {
              required: {
                value: true,
                message: "Color is required", // Set your custom error message
              },
            })}
          />
          {errors?.color && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.color?.message}`}
            </p>
          )}
        </FormItem>
        {/* ITEM */}
        <FormItem label="Condition">
          <Controller
            name="condition"
            control={control}
            defaultValue="" // Set the default value if needed
            rules={{ required: "Condition Field is required" }} // Add validation rules
            render={({ field, fieldState }) => (
              <div>
                <Select {...field}>
                  <option value="" disabled selected>
                    Select condition
                  </option>
                  <option value="brand new">Brand New</option>
                  <option value="foreign used">Foreign Used</option>
                  <option value="nigeria used">Nigeria Used</option>
                </Select>

                {fieldState?.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </FormItem>
        <FormItem label="Interior color">
          <Input
            placeholder="Red"
            {...register("interior_color", {
              required: {
                value: true,
                message: "Interior color is required", // Set your custom error message
              },
            })}
          />
        </FormItem>
        {/* <NcInputNumber label="Guests" defaultValue={4} />
        <NcInputNumber label="Bedroom" defaultValue={4} />
        <NcInputNumber label="Beds" defaultValue={4} />
        <NcInputNumber label="Bathroom" defaultValue={2} />
        <NcInputNumber label="Kitchen" defaultValue={2} /> */}

        <div className="w-full flex justify-end">
          <ButtonPrimary type="submit">Save</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default PageAddListing3;
