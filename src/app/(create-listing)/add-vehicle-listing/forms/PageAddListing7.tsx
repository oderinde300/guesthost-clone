"use client";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import React, { FC, useState } from "react";
import { Controller } from "react-hook-form";

export interface PageAddListing7Props {
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

const PageAddListing7: FC<PageAddListing7Props> = ({
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
  coverImgee,
  setCoverImage,
  image1,
  image2,
  image3,
  setImage1,
  setImage2,
  setImage3,
  data2,
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Pictures of the vehicle</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          A few beautiful photos will help customers have more sympathy for your
          vehicle.
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
        <div>
          <span className="text-lg font-semibold">Cover image</span>
          <div className="mt-5 ">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {coverImgee ? (
                  <img
                    src={URL.createObjectURL(coverImgee)}
                    alt=""
                    className="
                  max-w-[200px] max-h-[200px] object-cover"
                  />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-neutral-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
                <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <Controller
                      name="image_0"
                      control={control}
                      rules={{ required: "Please select a cover image." }}
                      render={({ field }) => (
                        <label
                          htmlFor="fileInput"
                          className="cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                        >
                          <span className="">Upload a file</span>
                          <input
                            type="file"
                            id="fileInput"
                            onChange={(e: any) => {
                              const selectedFile = e.target.files[0];
                              if (selectedFile && selectedFile.size > 0) {
                                data2.append("image[0]", selectedFile);
                                console.log("settt");
                              } else {
                                // Handle the case when no file is selected or the file is empty
                                setError(
                                  "image_0",
                                  "Please select a valid file."
                                );
                              }
                              field.onChange(selectedFile);
                              setCoverImage(e.target.files[0]);
                            }}
                            className="w-full absolute h-full opacity-0 cursor-pointer"
                          />
                        </label>
                      )}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <span className="text-red-500 text-sm mt-2">
            {errors["image_0"] && errors["image_0"].message}
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold">Picture one</span>
          <div className="mt-5 ">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {image1 ? (
                  <img
                    src={URL.createObjectURL(image1)}
                    alt=""
                    className="
                  max-w-[200px] max-h-[200px] object-cover"
                  />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-neutral-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
                <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <Controller
                      name="image_1"
                      control={control}
                      rules={{ required: "Please select an image." }}
                      render={({ field }) => (
                        <label
                          htmlFor="image_1"
                          className="cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                        >
                          <span className="">Upload a file</span>
                          <input
                            type="file"
                            id="image_1"
                            onChange={(e: any) => {
                              const selectedFile = e.target.files[0];
                              field.onChange(selectedFile);
                              setImage1(e.target.files[0]);
                            }}
                            className="w-full absolute h-full opacity-0 cursor-pointer"
                          />
                        </label>
                      )}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <span className="text-red-500 text-sm mt-2">
            {errors["image_1"] && errors["image_1"].message}
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold">Picture two</span>
          <div className="mt-5 ">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {image2 ? (
                  <img
                    src={URL.createObjectURL(image2)}
                    alt=""
                    className="
                  max-w-[200px] max-h-[200px] object-cover"
                  />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-neutral-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
                <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                  <label
                    htmlFor="image_2"
                    className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <Controller
                      name="image_2"
                      control={control}
                      rules={{ required: "Please select an image." }}
                      render={({ field }) => (
                        <label
                          htmlFor="image_2"
                          className="cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                        >
                          <span className="">Upload a file</span>
                          <input
                            type="file"
                            id="image_2"
                            onChange={(e: any) => {
                              const selectedFile = e.target.files[0];
                              field.onChange(selectedFile);
                              setImage2(e.target.files[0]);
                            }}
                            className="w-full absolute h-full opacity-0 cursor-pointer"
                          />
                        </label>
                      )}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <span className="text-red-500 text-sm mt-2">
            {errors["image_2"] && errors["image_2"].message}
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold">Picture three</span>
          <div className="mt-5 ">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {image3 ? (
                  <img
                    src={URL.createObjectURL(image3)}
                    alt=""
                    className="
                  max-w-[200px] max-h-[200px] object-cover"
                  />
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-neutral-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
                <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                  <label
                    htmlFor="image_2"
                    className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <Controller
                      name="image_3"
                      control={control}
                      rules={{ required: "Please select an image." }}
                      render={({ field }) => (
                        <label
                          htmlFor="image_3"
                          className="cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                        >
                          <span className="">Upload a file</span>
                          <input
                            type="file"
                            id="image_3"
                            onChange={(e: any) => {
                              const selectedFile = e.target.files[0];
                              field.onChange(selectedFile);
                              setImage3(e.target.files[0]);
                            }}
                            className="w-full absolute h-full opacity-0 cursor-pointer"
                          />
                        </label>
                      )}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <span className="text-red-500 text-sm mt-2">
            {errors["image_3"] && errors["image_3"].message}
          </span>
        </div>
        {/* ----------------- */}

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

export default PageAddListing7;
