"use client";

import React, { FC, useEffect, useState } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Header3Props {
  className?: string;
}

let WIN_PREV_POSITION = 0;
if (typeof window !== "undefined") {
  WIN_PREV_POSITION = (window as any).pageYOffset;
}

interface Tab {
  tab: string;
  path: string;
}

const NewHeader2: FC<Header3Props> = ({ className = "" }) => {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/" || "/stays") {
      setActiveTab("Stays");
    } else if (window.location.pathname === "/event-halls") {
      setActiveTab("Event Halls");
    } else if (window.location.pathname === "/vehicles") {
      setActiveTab("Vehicles");
    }
  }, []);

  return (
    <div className="flex justify-between items-center bg-white px-4 md:px-8 py-4  w-full z-50">
      {/* <div className="relative z-10 hidden md:flex flex-1 items-center"> */}
      <div className="relative z-10 flex flex-1 items-center">
        <Logo className="" />
      </div>
      <div className="hidden md:flex flex-[2] lg:flex-none mx-auto">
        <nav>
          {/* <ul className="h-[3.5rem] flex justify-center items-center space-x-5 sm:space-x-9">
            {TABS.map((tab) => {
              const active = tab?.tab === activeTab;
              return (
                <li
                  onClick={() => {setActiveTab(tab.tab)}
                  }
                  className={`relative flex-shrink-0 flex items-center cursor-pointer text-base ${
                    active
                      ? "text-neutral-900 dark:text-neutral-200 font-medium"
                      : "text-neutral-500 dark:text-neutral-300 "
                  } `}
                  key={tab.tab}
                >
                  <Link href={`/${tab?.path}`} key={tab?.tab}>
                    <div className="relative select-none">
                      <span>{tab.tab}</span>
                      {active && (
                        <span className="absolute top-full mt-1 block w-full h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul> */}

          {pathname !== "/login" && (
            <ul className="h-[3.5rem] flex justify-center items-center space-x-5 sm:space-x-9">
              <Link href="/stays">
                <li
                  onClick={() => {
                    setActiveTab("Stays");
                  }}
                  className={`relative flex-shrink-0 flex items-center cursor-pointer text-base ${
                    pathname === "/stays"
                      ? "text-neutral-900 dark:text-neutral-200 font-medium"
                      : "text-neutral-500 dark:text-neutral-300 "
                  }  ${
                    pathname === "/"
                      ? "text-neutral-900 dark:text-neutral-200 font-medium"
                      : "text-neutral-500 dark:text-neutral-300 "
                  } `}
                >
                  <div className="relative select-none">
                    <span>Stays</span>
                    {pathname === "/stays" && (
                      <span className="absolute top-full mt-1 block w-full h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
                    )}

                    {pathname === "/" && (
                      <span className="absolute top-full mt-1 block w-full h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
                    )}
                  </div>
                </li>
              </Link>

              <Link href="/event-halls">
                <li
                  onClick={() => {
                    setActiveTab("Event Halls");
                  }}
                  className={`relative flex-shrink-0 flex items-center cursor-pointer text-base ${
                    pathname === "/event-halls"
                      ? "text-neutral-900 dark:text-neutral-200 font-medium"
                      : "text-neutral-500 dark:text-neutral-300 "
                  } `}
                >
                  <div className="relative select-none">
                    <span>Event Halls</span>
                    {pathname === "/event-halls" && (
                      <span className="absolute top-full mt-1 block w-full h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
                    )}
                  </div>
                </li>
              </Link>

              <Link href="/vehicles">
                <li
                  onClick={() => {
                    setActiveTab("Vehicles");
                  }}
                  className={`relative flex-shrink-0 flex items-center cursor-pointer text-base ${
                    pathname === "/vehicles"
                      ? "text-neutral-900 dark:text-neutral-200 font-medium"
                      : "text-neutral-500 dark:text-neutral-300 "
                  } `}
                >
                  <div className="relative select-none">
                    <span>Vehicles</span>
                    {pathname === "/vehicles" && (
                      <span className="absolute top-full mt-1 block w-full h-0.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
                    )}
                  </div>
                </li>
              </Link>
            </ul>
          )}
        </nav>
      </div>

      <div className="hidden md:flex relative z-10 flex-1 justify-end text-neutral-700 dark:text-neutral-100">
        <div className="flex space-x-1">
          <Link
            href={"/select-listing"}
            className="self-center hidden xl:inline-flex px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full items-center text-sm text-gray-700 dark:text-neutral-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            List your property
          </Link>
          <Link
            href={"/login"}
            className="self-center hidden xl:inline-flex px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full items-center text-sm text-gray-700 dark:text-neutral-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="flex md:hidden">
        <MenuBar />
      </div>
    </div>
  );
};

export default NewHeader2;
