import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { STEP } from "@/libs/constants";
import Title from "@/components/Title";
import QuickQuote from "@/components/steps/Step1-QuickQuote";
import NextButton from "@/components/NextButton";
import SidePanel from "@/components/SidePanel";
import ReviewSection from "@/components/ReviewSection";
import ClaimNow from "@/components/steps/Step2-ClaimNow";
import SignComplete from "@/components/steps/Step3-SignComplete";
import LastThing from "@/components/steps/Step4-LastThing";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function Claim() {
  const router = useRouter();
  const [step, setStep] = useState<STEP>(STEP.QUICK_QUOTE);

  const prevStep = () => {
    if (step == STEP.QUICK_QUOTE) {
      router.push("/");
    } else {
      setStep((step) => step - 1);
    }
  };

  const nextStep = () => {
    if (step == STEP.LAST_THING) {
      router.push("/");
    } else {
      setStep((step) => step + 1);
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <Header />

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto lg:flex gap-2">
          <div className="flex items-start mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
            <div className="w-full">
              <ProgressBar step={step} prevStep={prevStep} />
              <Title step={step} />

              {step == STEP.QUICK_QUOTE && <QuickQuote />}
              {step == STEP.CLAIM_NOW && <ClaimNow />}
              {step == STEP.SIGN_COMPLETE && <SignComplete />}
              {step == STEP.LAST_THING && <LastThing />}

              <NextButton onClick={nextStep} />
            </div>
          </div>

          <SidePanel />
        </div>
      </section>

      <ReviewSection />

      <Footer />
    </main>
  );
}
