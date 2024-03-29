import {
  faDiscord,
  faGithub,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import { Staff } from "../../interfaces/Staff";

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
      url: "https://chat.nhcarrigan.com",
      color: "#FFFFFF",
      background: "#5865F2",
      hover: false,
    },
    {
      name: "Mastodon",
      icon: faMastodon,
      url: "https://mastodon.naomi.lgbt/@naomi",
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
