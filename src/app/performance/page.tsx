import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";
export default function PerformancePage() {
  return (
        <Hero
          alt="welding"
          imgData={performanceImg}
          title="We serve high performance applications"
        />);
}
