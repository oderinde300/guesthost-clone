"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PageAddListing1 from "./forms/PageAddListing1";
import PageAddListing2 from "./forms/PageAddListing2";
import PageAddListing4 from "./forms/PageAddListing4";
import PageAddListing7 from "./forms/PageAddListing7";
import PageAddListing9 from "./forms/PageAddListing9";
import PageAddListing10 from "./forms/PageAddListing10";
import PageAddListing6 from "./forms/PageAddListing6";
import PageAddListing3 from "./forms/PageAddListing3";
import PageAddListing5 from "./forms/PageAddListing5";
import PageAddListing8 from "./forms/PageAddListing8";

const IndexPage = () => {
  const initialData = {
    title: "",
    rental_form: "",
    state: "",
    city: "",
    postal_code: "",
    address: "",
    size: "",
    guests_no: "",
    bedrooms_no: "",
    beds_no: "",
    bathrooms_no: "",
    kitchen_no: "",
    key_features: "",
    smoking_allowed_status: "",
    pet_allowed_status: "",
    party_allowed_status: "",
    cooking_allowed_status: "",
    description: "",
    amount: "",
    min_nights: "",
    max_nights: "",
    availability: "",
    cover_image: "",
  };

  const [formData, setFormData] = useState<any>(initialData);
  const [selectedFeatures, setSelectedFeatures] = useState<any[]>([
    "Wifi",
    "Internet",
    "Air conditioning",
  ]);
  const [coverImgee, setCoverImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [minNights, setMinNights] = useState(3);
  const [maxNights, setMaxNights] = useState(3);

  const [smoking, setSmoking] = useState<string>("no");
  const [pet, setPet] = useState<string>("no");
  const [party, setParty] = useState<string>("no");
  const [cooking, setCooking] = useState<string>("no");

  const [page, setPage] = useState<number>(1);
  const nextPageHandler = () => {
    if (page < 10) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(10);
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
      ContentComponent = PageAddListing2;
      break;
    case 3:
      ContentComponent = PageAddListing3;
      break;
    case 4:
      ContentComponent = PageAddListing4;
      break;
    case 5:
      ContentComponent = PageAddListing5;
      break;
    case 6:
      ContentComponent = PageAddListing6;
      break;
    case 7:
      ContentComponent = PageAddListing7;
      break;
    case 8:
      ContentComponent = PageAddListing8;
      break;
    case 9:
      ContentComponent = PageAddListing9;
      break;
    case 10:
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
            / 10
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
            pet={pet}
            cooking={cooking}
            party={party}
            smoking={smoking}
            setSmoking={setSmoking}
            setCooking={setCooking}
            setPet={setPet}
            setParty={setParty}
            minNights={minNights}
            setMinNights={setMinNights}
            maxNights={maxNights}
            setMaxNights={setMaxNights}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
