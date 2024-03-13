"use client";
import React, { FC, useEffect, useState } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "@/app/add-listing/FormItem";
import { fetchListingCategories } from "@/actions/listings";
import { Controller, FieldError, FieldValues, useForm } from "react-hook-form";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { dataParser } from "./PageAddListing2";
// import { ListingCategoryInterface } from "@/interfaces";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<FieldValues>();

  const initialdata = dataParser("vehicleListingData");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
      model: "",
      make: "",
      ...initialdata, // Set your initial value here
    },
  });

  return (
    <>
      <h2 className="text-2xl font-semibold">Choosing vehicle categories</h2>
      <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
        Save data before clicking continue
      </span>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <form
        className="space-y-8"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          localStorage.setItem("vehicleListingData", JSON.stringify(data));
        })}
      >
        {/* ITEM */}

        <FormItem
          label="Category"
          desc="Category: Choose the condition of the vehicle"
        >
          <Controller
            name="category"
            control={control}
            defaultValue="" // Set the default value if needed
            rules={{ required: "Category Field is required" }} // Add validation rules
            render={({ field, fieldState }) => (
              <div>
                <Select {...field}>
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="cars">Cars</option>
                  <option value="buses">Buses</option>
                  <option value="trucks">Trucks</option>
                  <option value="motorbikes">Motorbikes</option>
                  <option value="boats">Boats</option>
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
        <FormItem label="Make" desc="The make of the vehicle">
          <Input
            placeholder="Make name"
            {...register("make", {
              required: {
                value: true,
                message: "Make is required", // Set your custom error message
              },
            })}
          />
          {errors?.make && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.make?.message}`}
            </p>
          )}
        </FormItem>
        <FormItem label="Model" desc="The model of the vehicle">
          <Input
            placeholder="Model name"
            {...register("model", {
              required: {
                value: true,
                message: "Model is required", // Set your custom error message
              },
            })}
          />
          {errors?.model && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.model?.message}`}
            </p>
          )}
        </FormItem>
        <div className="w-full flex justify-end">
          <ButtonPrimary type="submit">Save</ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default PageAddListing1;
