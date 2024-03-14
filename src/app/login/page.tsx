"use client";
import React, { FC, useEffect, useState } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, FieldError, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import router, { useRouter } from "next/router";
import authService from "@/services/authService";

export interface PageLoginProps {}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin: FC<PageLoginProps> = ({}) => {
  // Check authentication status on initial render
  const isAuthenticated = authService.isAuthenticated();

  // Redirect to login page if not authenticated and trying to access a protected route
  useEffect(() => {
    if (isAuthenticated && window.location.href.includes("/login")) {
      window.location.href = "/account";
    }
  }, [isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [isSubmitting, setHasSubmitted] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    // Handle form submission, e.g., send data to API
    console.log("Form data:", data);
    setHasSubmitted(true);

    authService
      .login(data)
      .then((response: any) => {
        setHasSubmitted(false);
        console.log("account response:", response);
        toast.success("Account Logged In successfully!");

        setTimeout(() => {
          // router.push('/dashboard');
          window.location.href = "/account";
        }, 5000);
      })
      .catch((error: any) => {
        console.log("account response error:", error);
        toast.error("Error Logging in account. Please try again.");
      })
      .finally(() => {
        setHasSubmitted(false);
      });
  };

  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div> */}
          {/* OR */}
          {/* <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div> */}
          {/* FORM */}
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="something@example.com"
                className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {(errors.email as FieldError)?.message}
                </p>
              )}
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/login" className="text-sm underline font-medium">
                  Forgot password?
                </Link>
              </span>
              <Input
                type="password"
                placeholder="Enter Password"
                className={`mt-1 ${errors.password ? "border-red-500" : ""}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {(errors.name as FieldError)?.message}
                </p>
              )}
            </label>
            <ButtonPrimary type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Authenticating..." : "Login"}
            </ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link href="/signup" className="font-semibold underline">
              Create an account
            </Link>
          </span>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default PageLogin;
