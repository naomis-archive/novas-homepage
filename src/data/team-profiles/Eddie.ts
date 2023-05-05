import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Staff } from "../../interfaces/Staff";

export const Eddie: Staff = {
  name: "Eddie Jaoude",
  // remove the roles that don't apply
  roles: ["moderator"],
  avatarUrl: "https://github.com/eddiejaoude.png",
  bio: "GitHub Star of the Year! Founder of EddieHub. Believes Open Source is for everyone 💥",
  socials: [
    {
      name: "Discord",
      // Icon from FontAwesome - ask Naomi if you need help
      icon: faDiscord,
      // URL to the social
      url: "https://discord.eddiehub.org/",
      // Color of the text
      color: "#5865f2",
      // Background color of the social badge
      background: "#ffffff",
      // LEAVE THIS FALSE
      hover: false,
    },
    // add more as desired!
  ],
};
