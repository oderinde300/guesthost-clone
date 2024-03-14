"use client";
import React, { FC, useEffect, useState } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import { fetchListingCategories } from "@/actions/listings";
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
}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
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

        <FormItem label="Title" desc="The name of the Hall">
          <Input
            placeholder="Luxary hall"
            {...register("title", {
              required: {
                value: true,
                message: "title is required", // Set your custom error message
              },
            })}
          />
          {errors?.title && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.title?.message}`}
            </p>
          )}
        </FormItem>

        <FormItem label="Size" desc="How large the hall is">
          <Input
            placeholder="..."
            {...register("size", {
              required: {
                value: true,
                message: "size is required", // Set your custom error message
              },
            })}
          />
          {errors?.size && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.size?.message}`}
            </p>
          )}
        </FormItem>

        <FormItem label="Seat capacity" desc="The number of seats the hall has">
          <Input
            placeholder="100"
            {...register("seat_capacity", {
              required: {
                value: true,
                message: "size is required", // Set your custom error message
              },
            })}
          />
          {errors?.seat_capacity && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.seat_capacity?.message}`}
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

export default PageAddListing1;
