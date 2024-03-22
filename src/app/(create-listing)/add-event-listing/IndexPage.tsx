"use client";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import React, { useState } from "react";
import PageAddListing1 from "./forms/PageAddListing1";
import PageAddListing2 from "./forms/PageAddListing2";
import PageAddListing4 from "./forms/PageAddListing4";
import PageAddListing7 from "./forms/PageAddListing7";
import PageAddListing9 from "./forms/PageAddListing9";
import PageAddListing10 from "./forms/PageAddListing10";
import { Controller, FieldError, FieldValues, useForm } from "react-hook-form";
import { PostAPICall } from "@/helpers";
import Cookies from "js-cookie";
import PageAddListing6 from "./forms/PageAddListing6";

const IndexPage = () => {
  const initialData = {
    title: "",
    address: "",
    size: "",
    seat_capacity: "",
    cover_image: "",
    description: "",
    amount: "",
    availability: "",
    image: "",
    key_features_1: "",
    state: "",
    city: "",
    postal_code: "",
  };

  const [formData, setFormData] = useState<any>(initialData);
  const [selectedFeatures, setSelectedFeatures] = useState<any[]>([
    "Wifi",
    "Internet",
  ]);
  const [coverImgee, setCoverImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [page, setPage] = useState<number>(1);
  const nextPageHandler = () => {
    if (page < 8) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(8);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  let ContentComponent = PageAddListing1;
  switch (page) {
    case 1:
      ContentComponent = PageAddListing1;
      break;
    case 2:
      ContentComponent = PageAddListing4;
      break;
    case 3:
      ContentComponent = PageAddListing2;
      break;
    case 4:
      ContentComponent = PageAddListing6;
      break;
    case 5:
      ContentComponent = PageAddListing7;
      break;
    case 6:
      ContentComponent = PageAddListing9;
      break;
    case 7:
      ContentComponent = PageAddListing10;
      break;
    default:
      ContentComponent = PageAddListing1;
      break;
  }

  const data2 = new FormData();

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className="space-y-11">
        <div>
          <span className="text-4xl font-semibold">{page}</span>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <ContentComponent
            formData={formData}
            errors={errors}
            control={control}
            register={register}
            handleSubmit={handleSubmit}
            prevPageHandler={prevPageHandler}
            nextPageHandler={nextPageHandler}
            setFormData={setFormData}
            watch={watch}
            setError={setError}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={setSelectedFeatures}
            coverImgee={coverImgee}
            setCoverImage={setCoverImage}
            image1={image1}
            image2={image2}
            image3={image3}
            setImage1={setImage1}
            setImage2={setImage2}
            setImage3={setImage3}
            data2={data2}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
