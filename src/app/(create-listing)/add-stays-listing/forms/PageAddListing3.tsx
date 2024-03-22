import NcInputNumber from "@/components/NcInputNumber";
import React, { FC } from "react";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import { Controller } from "react-hook-form";

export interface PageAddListing3Props {
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

const PageAddListing3: FC<PageAddListing3Props> = ({
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
      <h2 className="text-2xl font-semibold">Size of your location</h2>
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

        <FormItem label="Acreage (m2)">
          <Controller
            name="size"
            control={control}
            defaultValue="" // Set the default value if needed
            rules={{ required: "Size Field is required" }} // Add validation rules
            render={({ field, fieldState }) => (
              <div>
                <Select {...field}>
                  <option value="100m2">100</option>
                  <option value="200m2">200</option>
                  <option value="300m2">300</option>
                  <option value="400m2">400</option>
                  <option value="500m2">500</option>
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

        <FormItem label="Number of guests">
          <Input
            placeholder="2"
            label="Guests"
            defaultValue={4}
            type="number"
            {...register("guests_no", {
              required: {
                value: true,
                message: "Number of guests is required", // Set your custom error message
              },
            })}
          />
          {errors?.guests_no && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.guests_no?.message}`}
            </p>
          )}
        </FormItem>
        {/* 
        guests_no: "",
    bedrooms_no: "",
    beds_no: "",
    bathrooms_no: "",
    kitchen_no: "", */}

        <FormItem label="Number of bedrooms">
          <Input
            placeholder="3"
            label="Bedrooms"
            defaultValue={3}
            type="number"
            {...register("bedrooms_no", {
              required: {
                value: true,
                message: "Number of bedrooms is required", // Set your custom error message
              },
            })}
          />
          {errors?.bedrooms_no && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.bedrooms_no?.message}`}
            </p>
          )}
        </FormItem>

        <FormItem label="Number of beds">
          <Input
            placeholder="3"
            label="Beds"
            defaultValue={5}
            type="number"
            {...register("beds_no", {
              required: {
                value: true,
                message: "Number of beds is required", // Set your custom error message
              },
            })}
          />
          {errors?.beds_no && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.beds_no?.message}`}
            </p>
          )}
        </FormItem>

        <FormItem label="Number of kitchens">
          <Input
            placeholder="3"
            label="Kitchens"
            type="number"
            defaultValue={1}
            {...register("kitchen_no", {
              required: {
                value: true,
                message: "Number of kithchens is required", // Set your custom error message
              },
            })}
          />
          {errors?.kitchen_no && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.kitchen_no?.message}`}
            </p>
          )}
        </FormItem>

        <FormItem label="Number of bathrooms">
          <Input
            placeholder="3"
            label="Bathrooms"
            type="number"
            defaultValue={2}
            {...register("bathrooms_no", {
              required: {
                value: true,
                message: "Number of bathrooms is required", // Set your custom error message
              },
            })}
          />
          {errors?.bathrooms_no && (
            <p className="text-red-500 text-sm mt-1">
              {`${errors?.bathrooms_no?.message}`}
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

export default PageAddListing3;
