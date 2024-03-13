"use client";
import React, { FC, useEffect, useState } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import { fetchListingCategories } from "@/actions/listings";
// import { ListingCategoryInterface } from "@/interfaces";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    // Fetch listing categories from your API
    const fetchCategories = async () => {
      try {
        const response = await fetchListingCategories(); // Replace with your API endpoint
        const data = response.data.map((option: { slug: any; name: any }) => ({
          value: option.slug,
          label: option.name,
        }));
        setCategories(data);
      } catch (error) {
        console.error("Error fetching listing categories:", error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <>
      <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        {/* <FormItem label="Title" desc="The name of the event hall">
          <Select>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </Select>
        </FormItem> */}
        <FormItem label="Title" desc="The name of the Hall">
          <Input placeholder="Luxary hall" />
        </FormItem>
        <FormItem label="Size" desc="How large the hall is">
          <Input placeholder="..." />
        </FormItem>
        <FormItem label="Seat capacity" desc="The number of seats the hall has">
          <Input placeholder="100" />
        </FormItem>
        {/* <FormItem
          label="Rental form"
          desc="Entire place: Guests have the whole place to themselves—there's a private entrance and no shared spaces. A bedroom, bathroom, and kitchen are usually included."
        >
          <Select>
            <option value="Hotel">Entire place</option>
            <option value="Private room">Private room</option>
            <option value="Share room">Share room</option>
          </Select>
        </FormItem> */}
      </div>
    </>
  );
};

export default PageAddListing1;
