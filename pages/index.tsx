import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";

const Layout = dynamic(() => import("@/components/Layout"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ReviewSection />
    </Layout>
  );
}
