import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/performance"}>performance</Link>
        <Link href={"/scale"}>scale</Link>
        <Link href={"/reliability"}>reliability</Link>
      </div>
      <div>Home page</div>
    </div>
  );
}
