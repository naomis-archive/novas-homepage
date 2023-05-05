import {
  faGithub,
  faReddit,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Staff } from "../../interfaces/Staff";

export const Panquesito: Staff = {
  name: "David Leal",
  roles: ["support", "moderator"],
  avatarUrl: "https://github.com/Panquesito7.png",
  bio: "Open-source advocate, community manager, gamer, and app/game developer. Always there working for the community as well as ensuring communities are a safe space for everyone.",
  socials: [
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/Panquesito7",
      color: "#333333",
      background: "#f5f5f5",
      hover: false,
    },
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/David_Leal_7",
      color: "#FFFFFF",
      background: "#5865F2",
      hover: false,
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://www.youtube.com/channel/UCcZmWPJygsJ_szWKwTy2wqA",
      color: "#ff0000",
      background: "#ffffff",
      hover: false,
    },
    {
      name: "Reddit",
      icon: faReddit,
      url: "https://www.reddit.com/user/Panquesito7",
      color: "#ff4500",
      background: "#cee3f8",
      hover: false,
    },
    {
      name: "Donate on Liberapay",
      icon: faDollarSign,
      url: "https://en.liberapay.com/Panquesito7",
      color: "darkgreen",
      background: "lightgreen",
      hover: false,
    },
    {
      name: "Sponsor Me on GitHub",
      icon: faDollarSign,
      url: "https://github.com/sponsors/Panquesito7",
      color: "darkgreen",
      background: "lightgreen",
      hover: false,
    },
  ],
};
