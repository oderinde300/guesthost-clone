"use client";
import React, { FC, useEffect, useState } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import { fetchListingCategories } from "@/actions/listings";
import { Controller } from "react-hook-form";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonPrimary from "@/shared/ButtonPrimary";
// import { ListingCategoryInterface } from "@/interfaces";

export interface PageAddListing1Props {
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
  coverImgee: any;
  setCoverImage: any;
  image1: any;
  image2: any;
  image3: any;
  setImage1: any;
  setImage2: any;
  setImage3: any;
  data2: any;
  smoking: string;
  pet: string;
  cooking: string;
  party: string;
  setSmoking: any;
  setCooking: any;
  setPet: any;
  setParty: any;
  minNights: any;
  setMinNights: any;
  maxNights: any;
  setMaxNights: any;
}

const PageAddListing1: FC<PageAddListing1Props> = ({
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
  pet,
  cooking,
  party,
  smoking,
  setSmoking,
  setCooking,
  setPet,
  setParty,
  minNights,
  setMinNights,
  maxNights,
  setMaxNights,
}) => {
  // Empty dependency array ensures the effect runs once on mount

  return (
    <>
      <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <form
        className="space-y-8"
        onSubmit={handleSubmit((data: any) => {
          setFormData({ ...formData, ...data });
          console.log(data);
          nextPageHandler();
        })}
      >
        {/* ITEM */}
        <FormItem label="Title" desc="The name of the stays">
          <Input
            placeholder="Luxary house"
            {...register("title", {
              required: {
                value: true,
                message: "Title is required", // Set your custom error message
              },
            })}
          />
          {errors?.title && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.title?.message}`}
            </p>
          )}
        </FormItem>
        <FormItem
          label="Rental form"
          desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included."
        >
          <Controller
            name="rental_form"
            control={control}
            defaultValue="" // Set the default value if needed
            rules={{ required: "Rental form Field is required" }} // Add validation rules
            render={({ field, fieldState }) => (
              <div>
                <Select {...field}>
                  <option value="" disabled>
                    Select Rental form
                  </option>
                  <option value="Hotel">Entire place</option>
                  <option value="Private room">Private room</option>
                  <option value="Share room">Share room</option>
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

export default PageAddListing1;
