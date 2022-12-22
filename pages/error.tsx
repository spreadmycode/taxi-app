import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { STEP } from "@/libs/constants";
import Title from "@/components/Title";
import NextButton from "@/components/NextButton";
import ReviewSection from "@/components/ReviewSection";
import ErrorContent from "@/components/steps/Step-Error";

const Layout = dynamic(() => import("@/components/Layout"), {
  ssr: false,
});

export default function Error() {
  const router = useRouter();

  const restart = () => {
    router.push("/claim");
  };

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto lg:flex gap-2">
          <div className="flex items-start mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
            <div className="w-full">
              <Title step={STEP.ERROR} />

              <ErrorContent />

              <NextButton onClick={restart} label="Restart application" />
            </div>
          </div>
        </div>
      </section>

      <ReviewSection />
    </Layout>
  );
}
