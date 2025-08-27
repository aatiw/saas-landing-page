"use client"

import Tag from "@/utils/Tags";
import Featurecard from "./FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar from "./Avatar";
import Image from "next/image";
import Key from "./Key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24"> 
      <div className="container md:px-16 px-8 flex-col items-center justify-center">
        <div className="flex justify-center">
            <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl text-white font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 ">
            <Featurecard title="Real-time collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1">
                <div className="aspect-video flex items-center justify-center">
                    <Avatar className="z-40">
                        <Image 
                        src={avatar1}
                        alt="Avatar 1"
                        className="rounded-full"
                        />
                    </Avatar>
                    <Avatar className="-ml-6 border-indigo-500 z-30">
                        <Image 
                        src={avatar2}
                        alt="Avatar 1"
                        className="rounded-full"
                        />
                    </Avatar>
                    <Avatar className="-ml-6 border-amber-500 z-20">
                        <Image 
                        src={avatar3}
                        alt="Avatar 1"
                        className="rounded-full"
                        />
                    </Avatar>
                    <Avatar className="-ml-6 border-transparent">
                        <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center">
                          {Array.from({length: 3}).map((_,i) => (
                            <span className="size-1.5 rounded-full bg-white inline-flex"
                            key={i}
                            ></span>
                          ))}
                        </div>
                    </Avatar>
                </div>
            </Featurecard>


            <Featurecard title="Interactive prototyping" description="Engage your clients with prototypes that react to user action" className="md:col-span-2 lg:col-span-1"> 
              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 lg:text-center text-center row-span-3">
                  We&apos;ve acheived {" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span>{" "}
                  growth this year
                </p>
              </div>
            </Featurecard>


            <Featurecard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:cols-tart-auto group">
              <div className="aspect-video flex items-center justify-center gap-4">
                <Key className="w-28 group-hover:outline-2 outline-offset-4 group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">Shift</Key>
                <Key className="group-hover:outline-2 outline-offset-4 group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">Alt</Key>
                <Key className="group-hover:outline-2 outline-offset-4 group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">C</Key>
              </div>
            </Featurecard>


        </div>
        <div className="mt-15 flex items-center justify-center flex-wrap gap-5 ">
            {features.map(feature => (
                <div key={feature}
                className="bg-neutral-700/30 border border-white/10 py-1.5 px-3 
                md:px-5 md:py-2 inline-flex items-center justify-center space-x-2 
                rounded-3xl hover:scale-105 transition duration-500 group"
                >
                    <span className="size-6 rounded-full inline-flex justify-center items-center bg-lime-300 text-xl text-neutral-950 group-hover:rotate-90
                     transition duration-500">
                      &#10038;
                    </span>
                    <span className="font-medium text-white/50 md:text-lg">{feature}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  )};
