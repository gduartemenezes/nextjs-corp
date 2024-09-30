import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";
export default function ScalePage1() {
  return (
        <Hero
          alt="steel factory"
          imgData={scaleImg}
          title="Scale your app to infinity"
        />);
}
