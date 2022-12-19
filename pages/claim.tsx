import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Claim() {
  const [percent, setPercent] = useState<number>(45);

  return (
    <main>
      <Header />

      <section>
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
              the world's #1
            </span>
            &nbsp;CRM.
          </h1>
          <p className="max-w-screen-xl mx-auto text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
