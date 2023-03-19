import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Staff } from "../../../interfaces/Staff";

export const Naomi: Staff = {
  name: "Naomi Carrigan",
  // remove the roles that don't apply
  roles: ["admin", "developer", "support", "moderator"],
  avatarUrl: "https://cdn.nhcarrigan.com/profile.png",
  bio: "",
  socials: [
    {
      name: "Discord",
      icon: faDiscord,
      url: "https://chat.naomi.lgbt",
      color: "#FFFFFF",
      background: "#5865F2",
      hover: false,
    },
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/naomi_lgbt",
      color: "#FFFFFF",
      background: "#1DA1F2",
      hover: false,
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/naomi-lgbt",
      color: "#f5f5f5",
      background: "#333333",
      hover: false,
    },
  ],
};
