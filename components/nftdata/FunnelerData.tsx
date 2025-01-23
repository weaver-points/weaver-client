import { useState } from "react";
import SocialMediaAccordion from "../SocialMediaAccordion";

function FunnelerData() {
  const socials = [
    {
      name: "Telegram",
      category: "Socials",
      points: "40",
      status: "Done",
      image: "/telegram-badge.svg",
    },
    {
      name: "X",
      category: "Socials",
      points: "50",
      status: "Done",
      image: "/x-badge.svg",
    },
    {
      name: "Discord",
      category: "Socials",
      points: "50",
      status: "Done",
      image: "/discord-badge.svg",
    },
    {
      name: "Github",
      category: "Socials",
      points: "40",
      status: "Done",
      image: "/github-badge.svg",
    },
  ];

  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null
  );

  const toggleAccordion = (name: string) => {
    setExpandedAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex flex-col gap-y-6 pt-6">
      {socials.map((social) => (
        <SocialMediaAccordion
          key={social.name}
          social={social}
          isExpanded={expandedAccordion === social.name}
          toggleAccordion={() => toggleAccordion(social.name)}
        />
      ))}
    </div>
  );
}

export default FunnelerData;
