import { TAX_TYPE } from "@/libs/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const Animated = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const HeroSection = () => {
  const [amount, setAmount] = useState<number>(624);
  const [type, setType] = useState<TAX_TYPE>(TAX_TYPE.NONE);

  useEffect(() => {
    switch (type) {
      case TAX_TYPE.NONE:
        setAmount(624);
        break;
      case TAX_TYPE.CURRENT_YEAR:
      case TAX_TYPE.LAST_YEAR:
        setAmount(312);
        break;
      case TAX_TYPE.BOTH:
        setAmount(624);
        break;
    }
  }, [type]);

  return (
    <>
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl py-8 mx-auto lg:flex gap-2">
          <div className="mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
            <h1 className="max-w-2xl mb-6 lg:mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Your&nbsp;
              <span className="text-primary-600 dark:text-primary-500">£</span>
              <span className="text-primary-600 dark:text-primary-500">
                <Animated
                  animateToNumber={amount}
                  configs={[
                    { mass: 1, tension: 220, friction: 90 },
                    { mass: 1, tension: 280, friction: 90 },
                  ]}
                ></Animated>
              </span>
              &nbsp;tax claim starts here
            </h1>
            <p className="max-w-2xl font-bold text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
              Have you worked from home for a single day or more during the
              pandemic?
            </p>
            <div className="max-w-2xl text-xs text-primary-700 mb-6 lg:mb-10">
              Select which year you worked a day or more from home. If you
              worked from home during both years, select &apos;Both&apos;
            </div>
            <div className="flex justify-start items-center space-x-2 mb-6 lg:mb-10">
              <button
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg w-auto bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={() => setType(TAX_TYPE.LAST_YEAR)}
              >
                2020 - 21
              </button>
              <button
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg w-auto bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={() => setType(TAX_TYPE.CURRENT_YEAR)}
              >
                2021 - 22
              </button>
              <button
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg w-auto bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={() => setType(TAX_TYPE.BOTH)}
              >
                Both
              </button>
            </div>
            <div className="max-w-2xl text-sm text-gray-500">
              <ul className="grid gap-6 w-full md:grid-cols-2">
                <li>
                  <Link href="/claim">
                    <button className="inline-flex justify-between items-center p-5 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      <div className="flex-grow">
                        <div className="w-full flex flex-row justify-center items-center text-2xl font-semibold">
                          <span>Check my claim</span>
                        </div>
                      </div>
                      <svg
                        aria-hidden="true"
                        className="ml-3 w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden w-full max-w-md lg:h-auto lg:block">
            <div className="rounded-lg shadow-lg dark:hidden h-max">
              <img
                className=""
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-light.svg"
                alt="mockup light"
              />
            </div>
            <div className="rounded-lg shadow-lg hidden dark:block h-max">
              <img
                className=""
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-dark.svg"
                alt="mockup darj"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto md:px-20">
          <div className="grid lg:grid-cols-12 lg:gap-8 xl:gap-0 px-4 py-8 lg:py-40">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Your £624 tax refund starts here
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Have you worked from home for a single day or more during the
                pandemic?
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Speak to Sales
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
