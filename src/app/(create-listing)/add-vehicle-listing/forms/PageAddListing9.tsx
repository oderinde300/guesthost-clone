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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  coverImgee: File;
  data2: any;
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
  selectedFeatures,
  coverImgee,
  data2,
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
    console.log("Form data:", data);
    console.log(data?.image_0);
    const data1 = new FormData();
    data1.append("address", data?.address);
    data1.append("category", data?.category);
    data1.append("availability", formatDate(data?.availability));
    data1.append("cover_image", data.image_0);
    data1.append("image[0]", data?.image_1);
    data1.append("image[1]", data?.image_2);
    data1.append("image[2]", data?.image_3);
    data1.append("key_features", JSON.stringify(selectedFeatures));
    data1.append("make", data?.make);
    data1.append("model", data?.model);
    data1.append("year_of_manufacture", data?.year_of_manufacture);
    data1.append("color", data?.color);
    data1.append("interior_color", data?.interior_color);
    data1.append("no_of_seats", data?.no_of_seats);
    data1.append("description", data?.description);
    data1.append("amount", data?.amount);
    data1.append("state", data?.state);
    data1.append("city", data?.city);
    data1.append("postal_code", data?.postal_code);
    data1.append("registered_car", "yes");

    try {
      const token = Cookies.get("token");

      setLoading(true);
      const response = await callAPI(
        "api/v1/listing/vehicle/create",
        "POST",
        data1,
        {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(response);
      toast.success(response?.message);

      setLoading(false);
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message);
      setLoading(false);
    }
  };

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
        <FormItem label="Amount">
          <Input
            placeholder="0.00"
            {...register("amount", {
              required: {
                value: true,
                message: "Amount is required", // Set your custom error message
              },
            })}
          />
          {errors?.amount && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.amount?.message}`}
            </p>
          )}
        </FormItem>

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
      <ToastContainer />
    </>
  );
};

export default PageAddListing9;
