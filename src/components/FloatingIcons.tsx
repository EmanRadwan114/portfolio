import { FloatingDock } from "@/components/ui/floating-dock";
import { socialLinks } from "@/data/profileInfo";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";

const links = [
  {
    title: socialLinks[0].title,
    icon: <IconBrandLinkedin className="h-full w-full" />,
    href: socialLinks[0].href,
  },
  {
    title: socialLinks[1].title,
    icon: <IconBrandGithub className="h-full w-full" />,
    href: socialLinks[1].href,
  },
  {
    title: socialLinks[2].title,
    icon: <IconFileCv className="h-full w-full" />,
    href: socialLinks[2].href,
  },
];

export function FloatingIcons() {
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}
