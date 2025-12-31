import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Container from "./shared/Container";
import { useTheme } from "@/contexts/ThemeContext";
import SectionHeader from "./shared/SectionHeader";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { socialLinks } from "@/data/data";
import { Button } from "./ui/button";

const personalInfo = [
  {
    title: socialLinks[3].href,
    icon: <IconMail stroke={2} className="size-6 text-muted-foreground" />,
  },
  {
    title: socialLinks[4].href,
    icon: <IconPhone stroke={2} className="size-6 text-muted-foreground" />,
  },
  {
    title: "Cairo, Egypt",
    icon: <IconMapPin stroke={2} className="size-6 text-muted-foreground" />,
  },
];

const Contacts: React.FC = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="contacts" className="py-12 relative overflow-hidden">
      <Container className="py-20">
        <SectionHeader
          title="Let’s Connect"
          description="Have a project in mind or want to work together? Feel free to reach out — I’m always open to new opportunities and collaborations."
          headingClassName="bg-gradient-to-r from-violet-400 via-primary to-pink-600 bg-clip-text text-transparent"
        />

        {/* contact info */}
        <div className="flex flex-col gap-y-2 items-center justify-center mb-5">
          {personalInfo.map((item) => (
            <div
              className="text-foreground flex gap-2 items-center text-base"
              key={item.title}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* action */}
        <div className="flex justify-center items-center">
          <a href={`mailto:${socialLinks[3].href}`} target="_blank">
            <Button className={"text-base px-5"} variant={"outline"}>
              <IconMail stroke={2} className="size-5" />
              Send an Email
            </Button>
          </a>
        </div>

        {/* sparkles bg */}
        <div className="w-full absolute top-10 bottom-5 inset-0 -z-50">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={resolvedTheme === "dark" ? 0.6 : 1}
            maxSize={resolvedTheme === "dark" ? 1.4 : 2}
            particleDensity={50}
            className="w-full h-full"
            particleColor={resolvedTheme === "dark" ? "#fafafa" : "#844477"}
          />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
