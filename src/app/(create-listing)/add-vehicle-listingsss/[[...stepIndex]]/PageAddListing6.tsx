import React, { FC } from "react";
import Textarea from "@/shared/Textarea";

export interface PageAddListing6Props {}

const PageAddListing6: FC<PageAddListing6Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Your place description for client
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Mention the best features of your vehicle, any special feature like
          fast Wi-Fi or look, as well as things you like about the vehicle.
        </span>
      </div>

      <Textarea placeholder="..." rows={14} />
    </>
  );
};

export default PageAddListing6;
