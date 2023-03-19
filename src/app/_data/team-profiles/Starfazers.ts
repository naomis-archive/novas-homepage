import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Staff } from "../../../interfaces/Staff";

export const Starfazers: Staff = {
  name: "Starfazers",
  roles: ["artist"],
  avatarUrl: "https://starfazers.art/public/assets/images/avatar.png",
  bio: "",
  socials: [
    {
      name: "Homepage",
      icon: faGlobe,
      url: "https://starfazers.art",
      color: "purple",
      background: "lightpink",
      hover: false,
    },
  ],
};
