import Tag from "@/utils/Tags";
import Image from "next/image";
import notionIcon from '@/assets/images/notion-logo.svg';
import figmaIcon from '@/assets/images/figma-logo.svg';
import slackIcon from '@/assets/images/slack-logo.svg';
import relumeIcon from '@/assets/images/relume-logo.svg';
import framerIcon from '@/assets/images/framer-logo.svg';
import githubIcon from '@/assets/images/github-logo.svg';
import Featurecard from "./FeatureCard";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export default function Integrations() {
    return (
        <section>
            <div className="container px-16 grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                
                <div className="flex flex-col gap-4 justify-center text-center sm:text-left">
                    <Tag className="w-39">Integrations</Tag>
                    <h1 className="text-white text-6xl pt-5">
                        Play well with <br /> <span>others</span>
                    </h1>
                    <p className="text-white/60 text-xl leading-relaxed">
                        Layer seamlessly connects with your favourite tools, <br />
                        making it easy to plug into any workflow and collaborate across platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {integrations.map((integration) => (
                        <Featurecard
                            key={integration.name}
                            title={integration.name}
                            description={integration.description}
                            className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#111] hover:bg-[#222] transition"
                        >
                            <Image
                                src={integration.icon}
                                alt={integration.name}
                                height={80}
                                width={80}
                                className="mb-4"
                            />
                        </Featurecard>
                    ))}
                </div>

            </div>
        </section>
    );
}
