import React, { FC } from "react";
import Checkbox from "@/shared/Checkbox";

export interface PageAddListing4Props {}

const PageAddListing4: FC<PageAddListing4Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Features </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Many customers have searched for accommodation based on key features
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Key features
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Wifi" name="Wifi" defaultChecked />
            <Checkbox label="Internet" name="Internet" />
            <Checkbox label="TV" name="TV" defaultChecked />
            <Checkbox label="Air conditioning" name="Air conditioning" />
            <Checkbox label="Fan" name="Fan" />
            <Checkbox label="Private entrance" name="Private entrance" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing4;
