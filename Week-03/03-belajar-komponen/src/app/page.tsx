import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <p className="justify-center mt-16">Ilmuwan yang luar biasa</p>

      <div className="flex mt-32">
        <Profile />
        <div className="mx-96">
          <Profile />
        </div>
        <Profile />
      </div>
      { <Gallery /> }
    </main>
  );
}
