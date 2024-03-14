import React, { FC } from "react";
import Textarea from "@/shared/Textarea";
import ButtonSecondary from "@/shared/ButtonSecondary";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageAddListing6Props {
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

const PageAddListing6: FC<PageAddListing6Props> = ({
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
      <div>
        <h2 className="text-2xl font-semibold">
          Your place description for client
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Mention the best features of your hall, any special feature like fast
          Wi-Fi or look, as well as things you like about the hall.
        </span>
      </div>

      <form
        className="space-y-8"
        onSubmit={handleSubmit((data: any) => {
          setFormData({ ...formData, ...data });
          nextPageHandler();
        })}
      >
        <Textarea
          placeholder="..."
          rows={14}
          {...register("description", {
            required: {
              value: true,
              message: "Description is required", // Set your custom error message
            },
          })}
        />
        {errors?.description && (
          <p className="text-red-500 text-sm mt-1">
            {`${errors?.description?.message}`}
          </p>
        )}
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

export default PageAddListing6;
