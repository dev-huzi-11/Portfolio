import Image from "next/image";
import { Button } from "./ui/button";
import { Highlight } from "./ui/hero-highlight";
import Link from "next/link";

function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-7xl flex justify-around items-center mx-auto px-12">
      <div className="text-center lg:text-start md:text-start mb-24">
        <h3 className="text:4xl font-medium">Myself</h3>
        <h2 className="text-6xl mb-4 font-bold text-[#4a60f0]">
          Huzaifa Nazeer
        </h2>
        <p className="lg:max-w-lg max-w-md mb-3 text-xl lg:text-base">
          <Highlight className="text-black dark:text-white">
            A dedicated and passionate web developer
          </Highlight>
          with a keen interest in building efficient, scalable, and user-centric
          web applications. I specialize in creating responsive and dynamic
          websites that offer seamless user experiences.
        </p>
        <Link href={"/contact"}>
          <Button className="bg-[#4a60f0] text-white font-semibold text-md hover:bg-[#3f50be] rounded-full lg:px-8 py-6">
            Contact me
          </Button>
        </Link>
      </div>
      <div className="h-[17rem] w-[15rem] bg-gradient-to-b from-[#5367ee] to-22% to-[#ccccef] to-92% rounded-t-full flex justify-center md:block hidden mb-24">
        <Image
          className="ml-6 mt-6"
          src="/portfolio.png"
          width={210}
          height={210}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default HomePage;
