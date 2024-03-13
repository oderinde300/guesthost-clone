"use client";
import React, { useState, FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonPrimary from "@/shared/ButtonPrimary";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";

export interface PageAddListing8Props {
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
}

const PageAddListing8: FC<PageAddListing8Props> = ({
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
  const [dates, setDates] = useState<number[]>([
    new Date("2023/02/06").getTime(),
    new Date("2023/02/09").getTime(),
    new Date("2023/02/15").getTime(),
  ]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Price your vehicle</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {` The price you want to sell your vehicle`}
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

        <FormItem label="Base price">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">₦</span>
            </div>
            <FormItem label="Price">
              <Input
                placeholder="0.00"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price of seats is required", // Set your custom error message
                  },
                })}
              />
              {errors?.price && (
                <p className="text-red-500 text-sm mt-1">
                  {`${errors?.price?.message}`}
                </p>
              )}
            </FormItem>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">NGN</span>
            </div>
          </div>
        </FormItem>
        <FormItem label="Availability">
          <Input placeholder="..." />
        </FormItem>

        {/* <div className="addListingDatePickerExclude">
        <DatePickerCustomDay
          onChange={(date:any) => {
            let newDates = [];

            if (!date) {
              return;
            }
            const newTime = date.getTime();
            if (dates.includes(newTime)) {
              newDates = dates.filter((item) => item !== newTime);
            } else {
              newDates = [...dates, newTime];
            }
            setDates(newDates);
          }}
          // selected={startDate}
          monthsShown={2}
          showPopperArrow={false}
          excludeDates={dates.filter(Boolean).map((item) => new Date(item))}
          inline
          renderCustomHeader={(p:any) => <DatePickerCustomHeaderTwoMonth {...p} />}
          renderDayContents={(day:any, date:any) => (
            <DatePickerCustomDay dayOfMonth={day} date={date} />
          )}
        />
      </div> */}

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

export default PageAddListing8;
