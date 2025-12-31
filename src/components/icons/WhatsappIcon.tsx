import { IconBrandWhatsapp } from "@tabler/icons-react";
import React from "react";
import { motion } from "motion/react"; // 2025 Motion API
import { socialLinks } from "@/data/data";

const WhatsappIcon: React.FC = () => {
  return (
    <motion.a
      href={socialLinks[5].href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed end-5 bottom-3 z-50 block"
      // Floating Animation
      animate={{
        y: [0, -10],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        type: "spring",
        stiffness: 50,
        damping: 10,
      }}
      // Interactive feedback
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IconBrandWhatsapp
        stroke={2}
        className="size-12 text-green-600 cursor-pointer drop-shadow-lg"
      />
    </motion.a>
  );
};

export default WhatsappIcon;
