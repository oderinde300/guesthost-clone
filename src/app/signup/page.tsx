'use client'
import React, { FC, useState } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, FieldError, useForm } from "react-hook-form";
import { createAccount } from "@/actions/authentication";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from "next/router";
import { useRouter } from "next/navigation";

export interface PageSignUpProps {}

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

const PageSignUp: FC<PageSignUpProps> = ({}) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();
  const [isSubmitting, setHasSubmitted] = useState<boolean>(false)

  const router  =  useRouter()

  const onSubmit = (data: any) => {
    // Handle form submission, e.g., send data to API
    console.log('Form data:', data);
    setHasSubmitted(true)
    
    createAccount(data).then((response) => {
      setHasSubmitted(false)
      console.log("account response:", response)
      toast.success('Account created successfully!');
      // Redirect to login after 5 seconds
      setTimeout(() => {
        router.push('/login');
      }, 5000);
    }).catch((error) => {
      console.log("account response:", error)
      toast.error('Error creating account. Please try again.');
    }).finally(() => {
      setHasSubmitted(false)
    })
  };
  
  return (
    <div className={`nc-PageSignUp  `}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Create Account
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
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
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                First Name
              </span>
              <Input
                type="text"
                placeholder="Enter First Name"
                className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                {...register('first_name', { required: 'First Name is required' })}
              />
              {errors.first_name && <p className="text-red-500 text-sm mt-1">{(errors.first_name as FieldError)?.message}</p>}
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Last Name
              </span>
              <Input
                type="text"
                placeholder="Enter Last Name"
                className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                {...register('last_name', { required: 'Last Name is required' })}
              />
              {errors.last_name && <p className="text-red-500 text-sm mt-1">{(errors.last_name as FieldError)?.message}</p>}
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email', { required: true, pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError)?.message}</p>}
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input
                type="password"
                placeholder="Enter Password"
                className={`mt-1 ${errors.password ? 'border-red-500' : ''}`}
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{(errors.name as FieldError)?.message}</p>}
            </label>
            <ButtonPrimary type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Continue"}
            </ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link href="/login" className="font-semibold underline">
              Sign in
            </Link>
          </span>
        </div>
      </div>


      <ToastContainer />
    </div>
  );
};

export default PageSignUp;
