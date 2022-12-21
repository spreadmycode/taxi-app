import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function Claim() {
  const [percent, setPercent] = useState<number>(45);

  return (
    <main className="bg-white dark:bg-gray-900">
      <Header />

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto lg:flex gap-2">
          <div className="flex items-start mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
            <div className="w-full">
              <div className="w-full pt-4 mx-auto text-center lg:pt-8">
                <div className="flex justify-between items-center mb-1">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-blue-700 dark:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Go back
                  </Link>
                  <span className="text-sm font-medium text-blue-700 dark:text-white">
                    {percent}% completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#0E9F6E] h-2.5 rounded-full"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>

              <div className="w-full pt-4 mx-auto text-center lg:pt-8">
                <h1 className="max-w-screen-xl mx-auto text-left mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  <span className="text-blue-600 dark:text-blue-500">
                    Quick quote
                  </span>
                </h1>
                <p className="max-w-screen-xl mx-auto text-left text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                  Enter your details to receive your estimated tax claim quote
                </p>
              </div>

              <form action="#">
                <div className="grid gap-5 my-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <select
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Title</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                      <option value="Rev">Rev</option>
                      <option value="Dame">Dame</option>
                      <option value="Lady">Lady</option>
                      <option value="Sir">Sir</option>
                      <option value="Lord">Lord</option>
                    </select>
                  </div>
                  <div></div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block mb-2 text-lg font-medium text-green-700 dark:text-green-500"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="First Name"
                      required
                    />
                    <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                      <span className="font-medium">Well done!</span> Some
                      success message.
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block mb-2 text-lg font-medium text-red-700 dark:text-red-500"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Last Name"
                      required
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="mobile-number"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Mobile Telephone Number
                    </label>
                    <div className="flex">
                      <span className="inline-flex flex-col justify-center items-center px-4 text-[8px] text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-shield-fill-check text-[#25D0BC] mb-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                          />
                        </svg>
                        SECURE
                      </span>
                      <input
                        type="text"
                        name="mobile-number"
                        id="mobile-number"
                        placeholder=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-tr-lg rounded-br-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      We need this so we can keep you updated on your claim with
                      text messages
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Email Address
                    </label>
                    <div className="flex">
                      <span className="inline-flex flex-col justify-center items-center px-4 text-[8px] text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-shield-fill-check text-[#25D0BC] mb-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                          />
                        </svg>
                        SECURE
                      </span>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-tr-lg rounded-br-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      Enter your postcode, then click &apos;Find my
                      address&apos;. Then select your address to proceed
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      What is your current address?
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="address"
                        className="block w-full p-4 pl-10 sm:text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Your Postcode"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Search
                      </button>
                    </div>
                    <p
                      id="helper-text-explanation"
                      className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      Enter your postcode, then click &apos;Find my
                      address&apos;. Then select your address to proceed
                    </p>
                  </div>
                </div>
                <div className="w-full my-6">
                  <div className="w-full mb-2">
                    <label
                      htmlFor="birthday"
                      className="block text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Date of Birth
                    </label>
                  </div>

                  <div id="birthday" className="grid gap-5  md:grid-cols-3">
                    <div className="grid gap-5 grid-cols-2 md:col-span-2">
                      <div>
                        <select
                          id="day"
                          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="">DD</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                        <p
                          id="helper-text-explanation"
                          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                          Day of birth
                        </p>
                      </div>
                      <div>
                        <select
                          id="month"
                          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="">MM</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                        <p
                          id="helper-text-explanation"
                          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                          Month of birth
                        </p>
                      </div>
                    </div>
                    <div>
                      <select
                        id="year"
                        className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="">YYYY</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                      </select>
                      <p
                        id="helper-text-explanation"
                        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Year of birth
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full text-gray-500 mt-10 mb-8 md:mb-24">
                  <ul className="grid gap-6 w-full md:grid-cols-2">
                    <li>
                      <Link href="/">
                        <button className="inline-flex justify-between items-center p-5 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          <div className="flex-grow">
                            <div className="w-full flex flex-row justify-center items-center text-2xl font-semibold">
                              <span>Next</span>
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
              </form>
            </div>
          </div>
          <div className="hidden w-full max-w-md p-12 lg:min-h-screen lg:h-auto lg:block bg-primary-600">
            <div className="block p-8 text-white rounded-lg bg-primary-500">
              <h3 className="mb-1 text-2xl font-semibold">
                Your selected plan
              </h3>
              <p className="mb-4 font-light text-primary-100 sm:text-lg">
                30-day free trial
              </p>
              <ul role="list" className="space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <img
              className="mx-auto p-2 w-36 h-36 rounded-full ring-4 ring-gray-300 dark:ring-gray-500 mb-3 lg:mb-5"
              src="reviewer-photo.jpg"
              alt="profile picture"
            />
            <div
              // @ts-ignore
              src="https://cdn.trustindex.io/loader.js?1b5197711c6c13477e760d58dd2"
            ></div>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                &quot;Very speedy response & questions easy to answer; form
                really did take just 3 minutes to complete which won&apos;t
                break the bank but might just earn you some cash to put in
                it.&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  S
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  from reviews.io
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <Footer />
    </main>
  );
}
