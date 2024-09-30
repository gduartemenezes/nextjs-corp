import Image from "next/image";
import homeImg from "public/home.jpg";
export default function Home() {
  return (
    <div>
      Home page
      <div className="absolut -z-10 inset-0">
        <Image
          alt="car factory"
          src={homeImg}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
