import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";

const links = [
  {
    title: "Linkedin",
    icon: <IconBrandLinkedin className="h-full w-full" />,
    href: "https://www.linkedin.com/in/eman-radwan99/",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full" />,
    href: "https://github.com/EmanRadwan114",
  },
  {
    title: "CV",
    icon: <IconFileCv className="h-full w-full" />,
    href: "https://drive.google.com/file/d/1QOv6kR8aXfm6j6ZZXbbqUvNYrHBMJ9GR/view?usp=sharing",
  },
];

export function FloatingIcons() {
  return (
    <div className="flex items-center justify-center h-140 w-full">
      <FloatingDock items={links} />
    </div>
  );
}
