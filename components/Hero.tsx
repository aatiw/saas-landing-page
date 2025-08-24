import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-1.png";
import Image from "next/image";
import Pointer from "./Pointer";

export default function Hero() {
  return (
    <section className="mt-32 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-32 hidden md:block">
            <Image
            src={designExample1Image}
            alt="design"
            />
        </div>
        <div className="absolute -right-64 top-8  hidden md:block">
            <Image
            src={designExample2Image}
            alt="design"
            />
        </div>
        <div className="absolute left-64 top-96 hidden md:block">
            <Pointer name="andrea" color="red" />
        </div>
        <div className="absolute right-64 top-24 hidden md:block">
            <Pointer name="bryan" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 roundeded-full text-neutral-950 font-semibold">
            $7.5M seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl text-center font-medium text-white mt-6">
            Impactful design,
            <br className="hidden md:block" />
            created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
            Design tools should&apos; t slow you down. Layers combines
            powerful features with an intuitive interface that keeps you
            in your creative flow.
        </p>

        <form className="flex border border-white/50 rounded-full p-2 mt-8 max-w-lg mx-auto">
            <input type="email"
                placeholder="enter your email"
                className="bg-transparent px-4 md:flex-1 w-full"
            />
            <button type="submit" className="text-[#080808] border border-white rounded-4xl bg-[#A6E43C] hover:bg-transparent hover:text-white cursor-pointer w-24 h-10">Sign up</button>
        </form>
      </div>
    </section>
  );
}
