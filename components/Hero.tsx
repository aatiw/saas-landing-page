"use client"

import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-1.png";
import Image from "next/image";
import Pointer from "./Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, {opacity: 1}, {duration: 0.5}],
      [leftDesignScope.current, {y:0, x:0}, {duration: 0.5}]
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, {opacity:1}, {duration:0.5}],
      [leftPointerScope.current, {y:0, x:-100}, {duration:0.5}],
      [leftPointerScope.current, {x:0, y:[0,16,0]}, {duration:0.5, ease:"easeInOut"}]
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
      [rightDesignScope.current, {x:0, y:0}, {duration: 0.5}],
    ]);

    rightPointerAnimate([
      [rightPointerScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
      [rightPointerScope.current, {x:175, y:0}, {duration: 0.5}],
      [leftPointerScope.current, {x:0, y:[0,20,0]}, {duration:0.5, ease:"easeInOut"}]
    ]);
  },[])
  return (
    <section className="mt-32 overflow-x-clip" style={{
      cursor: `url(${cursorYouImage.src}), auto`
    }}>
      <div className="container relative">
        <motion.div ref={leftDesignScope} drag initial={{opacity:0, y:100, x:-100}} className="absolute -left-32 top-32 hidden md:block">
            <Image
            src={designExample1Image}
            alt="design"
            draggable="false"
            />
        </motion.div>
        <motion.div ref={rightDesignScope} drag initial={{opacity:0, x:100, y:100}} className="absolute -right-64 top-8  hidden md:block">
            <Image
            src={designExample2Image}
            alt="design"
            draggable="false"
            />
        </motion.div>
        <motion.div ref={leftPointerScope} initial={{opacity:0, y:100, x:-200}} className="absolute left-64 top-96 hidden lg:block">
            <Pointer name="andrea" color="red" />
        </motion.div>
        <motion.div ref={rightPointerScope} initial={{ opacity: 0, x:275, y:100}} className="absolute right-64 top-24 hidden lg:block">
            <Pointer name="bryan" />
        </motion.div>
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
