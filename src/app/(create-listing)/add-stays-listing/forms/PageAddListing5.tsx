import React, { FC, useState } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import ButtonSecondary from "@/shared/ButtonSecondary";

export interface PageAddListing5Props {
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
  smoking: string;
  pet: string;
  cooking: string;
  party: string;
  setSmoking: any;
  setCooking: any;
  setPet: any;
  setParty: any;
}
const PageAddListing5: FC<PageAddListing5Props> = ({
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
  pet,
  cooking,
  party,
  smoking,
  setSmoking,
  setCooking,
  setPet,
  setParty,
}) => {
  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean,
    handleChange?: any
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          value={id}
          onChange={() => {
            handleChange(id);
          }}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };

  const renderNoInclude = (text: string) => {
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"></i>
      </div>
    );
  };

  const smokingHandler = (name: string) => {
    setSmoking(name);
  };
  const petHandler = (name: string) => {
    setPet(name);
  };
  const partyHandler = (name: string) => {
    setParty(name);
  };
  const cookingHandler = (name: string) => {
    setCooking(name);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Set house rules for your guests{" "}
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Guests must agree to your house rules before they book.
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
            Smoking
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Smoking", "Yes", "Yes", false, smokingHandler)}
            {renderRadio("Smoking", "No", "No", true, smokingHandler)}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Pet
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Pet", "Yes", "Yes", false, petHandler)}
            {renderRadio("Pet", "No", "No", true, petHandler)}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Party organizing
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Partyorganizing", "Yes", "Yes", false, partyHandler)}
            {renderRadio("Partyorganizing", "No", "No", true, partyHandler)}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Cooking
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Cooking", "Yes", "Yes", false, cookingHandler)}
            {renderRadio("Cooking", "No", "No", true, cookingHandler)}
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

export default PageAddListing5;
