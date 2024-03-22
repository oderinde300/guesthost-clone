"use client";

import React, { FC, useState } from "react";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import NcInputNumber from "@/components/NcInputNumber";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import DatePicker from "react-datepicker";
import FormItem from "./FormItem";
import Input from "@/shared/Input";
import { Controller } from "react-hook-form";
import callAPI, { PostAPICall } from "@/helpers";
import Cookies from "js-cookie";

export interface PageAddListing9Props {
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

const PageAddListing9: FC<PageAddListing9Props> = ({
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
  selectedFeatures,
}) => {
  function formatDate(inputDate: any) {
    const dateObject = new Date(inputDate);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 to month since it's zero-based
    const day = String(dateObject.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    const data1 = new FormData();
    data1.append("title", data?.title);
    data1.append("address", data?.address);
    data1.append("rental_form", data?.rental_form);
    data1.append("availability", formatDate(data?.availability));
    data1.append("cover_image", data.image_0);
    data1.append("image[0]", data?.image_1);
    data1.append("image[1]", data?.image_2);
    data1.append("image[2]", data?.image_3);
    data1.append("key_features", JSON.stringify(selectedFeatures));
    data1.append("description", data?.description);
    data1.append("amount", data?.amount);
    data1.append("state", data?.state);
    data1.append("city", data?.city);
    data1.append("postal_code", data?.postal_code);
    data1.append("cooking_allowed_status", cooking);
    data1.append("party_allowed_status", party);
    data1.append("pet_allowed_status", pet);
    data1.append("smoking_allowed_status", smoking);
    data1.append("min_nights", minNights);
    data1.append("max_nights", maxNights);
    data1.append("guests_no", data?.guests_no);
    data1.append("bedrooms_no", data?.bedrooms_no);
    data1.append("bathrooms_no", data?.bathrooms_no);

    data1.append("beds_no", data?.beds_no);
    data1.append("kitchen_no", data?.kitchen_no);
    data1.append("size", data?.size);

    try {
      const token2 = localStorage.getItem("token");
      const token = Cookies.get("token");

      console.log(token);
      console.log(token2);
      setLoading(true);
      const response = await callAPI(
        "api/v1/listing/shortlet/create",
        "POST",
        data1,
        {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token2}`,
        }
      );
      console.log(response);
      setLoading(false);
    } catch (err: any) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleMinNights = (value: any) => {
    setMinNights(value);
  };
  const handleMaxNights = (value: any) => {
    setMaxNights(value);
  };

  console.log(loading);

  return (
    <>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}

      {/*  */}
      <div>
        <h2 className="text-2xl font-semibold">Set your availability</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Editing your calendar is easy—just select a date to block or unblock
          it. You can always make changes after you publish.
        </span>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-7">
          {/* ITEM */}
          <NcInputNumber
            label="Nights min"
            defaultValue={3}
            handleChnage={handleMinNights}
          />
          <NcInputNumber
            label="Nights max"
            defaultValue={3}
            handleChnage={handleMaxNights}
          />
        </div>

        <FormItem label="Availability" desc="Select the availability date">
          <div className="addListingDatePickerExclude">
            <Controller
              name="availability"
              control={control}
              defaultValue=""
              rules={{ required: "Availability field is required" }}
              render={({ field, fieldState }) => {
                // console.log("Availability Field Value:", field.value);
                return (
                  <div className="bg-white">
                    <DatePicker
                      id="availability"
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      showPopperArrow={false}
                      placeholderText="Select a date"
                      monthsShown={2}
                      inline
                      renderCustomHeader={(p) => (
                        <DatePickerCustomHeaderTwoMonth {...p} />
                      )}
                      renderDayContents={(day, date) => (
                        <DatePickerCustomDay dayOfMonth={day} date={date} />
                      )}
                      // className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 text-sm font-normal rounded-2xl h-11 px-4 py-3"
                    />
                    {fieldState?.error && (
                      <p className="text-red-500 text-sm mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                );
              }}
            />
          </div>
        </FormItem>
        <div className="flex justify-end space-x-5">
          <ButtonSecondary
            type="button"
            onClick={prevPageHandler}
            disabled={loading}
          >
            Go back
          </ButtonSecondary>
          <ButtonPrimary type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default PageAddListing9;
