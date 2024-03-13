"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageAddListing2Props {
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

const PageAddListing2: FC<PageAddListing2Props> = ({
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
      <h2 className="text-2xl font-semibold">Your place location</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <form
        className="space-y-8"
        onSubmit={handleSubmit((data: any) => {
          setFormData({ ...formData, ...data });
          nextPageHandler();
        })}
      >
        <ButtonSecondary>
          <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="ml-3">Use current location</span>
        </ButtonSecondary>
        {/* ITEM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="City">
            <Input
              placeholder="City"
              {...register("city", {
                required: {
                  value: true,
                  message: "City is required", // Set your custom error message
                },
              })}
            />
            {errors?.city && (
              <p className="text-red-500 text-sm mt-1">
                {`${errors?.city?.message}`}
              </p>
            )}
          </FormItem>
          <FormItem label="State">
            <Input
              placeholder="state"
              {...register("state", {
                required: {
                  value: true,
                  message: "State is required", // Set your custom error message
                },
              })}
            />
            {errors?.state && (
              <p className="text-red-500 text-sm mt-1">
                {`${errors?.state?.message}`}
              </p>
            )}
          </FormItem>
          <FormItem label="Postal code">
            <Input
              placeholder="postal code"
              {...register("postal_code", {
                required: {
                  value: true,
                  message: "Postal code is required", // Set your custom error message
                },
              })}
            />
            {errors?.postal_code && (
              <p className="text-red-500 text-sm mt-1">
                {`${errors?.postal_code?.message}`}
              </p>
            )}
          </FormItem>
        </div>
        <div>
          <Label>Detailed address</Label>
          <FormItem label="address">
            <Input
              placeholder="address"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required", // Set your custom error message
                },
              })}
            />
            {errors?.address && (
              <p className="text-red-500 text-sm mt-1">
                {`${errors?.address?.message}`}
              </p>
            )}
          </FormItem>
          {/* <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            1110 Pennsylvania Avenue NW, Washington, DC 20230
          </span> */}
          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <div className="rounded-xl overflow-hidden">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                  }}
                  yesIWantToUseGoogleMapApiInternals
                  defaultZoom={15}
                  defaultCenter={{
                    lat: 55.9607277,
                    lng: 36.2172614,
                  }}
                >
                  <LocationMarker lat={55.9607277} lng={36.2172614} />
                </GoogleMapReact>
              </div>
            </div>
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

export default PageAddListing2;
