import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Claim() {
  const [percent, setPercent] = useState<number>(45);

  return (
    <main>
      <Header />

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-2 py-4 mx-auto text-center lg:px-2 lg:py-8">
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              ClaimingMadeEasy™
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              {percent}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>

        <div className="max-w-screen-xl px-2 py-4 mx-auto text-center lg:px-2 lg:py-8">
          <h1 className="max-w-screen-xl mx-auto text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Get back to growth with&nbsp;
            <span className="text-blue-600 dark:text-blue-500">
              the world&apos;s #1
            </span>
            &nbsp;CRM.
          </h1>
          <p className="max-w-screen-xl mx-auto text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
          <div className="w-full">
            <div className="w-full">
              <ol className="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base">
                <li className="flex items-center text-primary-600 dark:text-primary-500 sm:after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <div className="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Personal <span className="hidden sm:inline-flex">Info</span>
                  </div>
                </li>
                <li className="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <div className="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                    <div className="mr-2 sm:mb-2 sm:mx-auto">2</div>
                    Account <span className="hidden sm:inline-flex">Info</span>
                  </div>
                </li>
                <li className="flex items-center sm:block">
                  <div className="mr-2 sm:mb-2 sm:mx-auto">3</div>
                  Confirmation
                </li>
              </ol>
            </div>

            <div className="grid gap-5 my-6 md:grid-cols-2">
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
                  <span className="font-medium">Well done!</span> Some success
                  message.
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
                  className="block mb-4 text-lg font-medium text-gray-900 dark:text-white leading-5"
                >
                  Mobile Telephone Number
                  <br />
                  <span className="text-xs">
                    We need this so we can keep you updated on your claim with
                    text messages
                  </span>
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
                        fill-rule="evenodd"
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
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-4 text-lg font-medium text-gray-900 dark:text-white leading-5"
                >
                  Email Address
                  <br />
                  <span className="text-xs">
                    We need this so we can keep you updated on your claim by
                    email
                  </span>
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
                        fill-rule="evenodd"
                        d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                      />
                    </svg>
                    SECURE
                  </span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-tr-lg rounded-br-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="block mb-4 text-lg font-medium text-gray-900 dark:text-white leading-5"
                >
                  What is your current address?
                  <br />
                  <span className="text-xs">
                    Enter your postcode, then click &apos;Find my address&apos;.
                    Then select your address to proceed
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="ENTER YOUR POSTCODE"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="full my-6">
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
                    <label
                      htmlFor="day"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                    >
                      Day of birth
                    </label>
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
                  </div>
                  <div>
                    <label
                      htmlFor="month"
                      className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                    >
                      Month of birth
                    </label>
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
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Year of birth
                  </label>
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
                </div>
              </div>
            </div>

            <div className="w-full text-gray-500 mb-6 lg:mb-10">
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
