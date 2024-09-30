import Hero from "@/components/hero";
import homeImg from "public/home.jpg";
export default function Home() {
  return (
        <Hero
          alt="car factory"
          imgData={homeImg}
          title="Professional Cloud Hosting"
        />);
}
