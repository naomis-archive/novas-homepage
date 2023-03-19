import { faReddit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Staff } from "../../../interfaces/Staff";

export const Elois: Staff = {
  name: "Elois Angel | any pronouns",
  roles: ["moderator"],
  avatarUrl: "https://cdn.naomi.lgbt/avatars/your-username.png",
  bio: "Hi! I'm Angel Girl 2118, but you can call me Elois (or Angel :P). I'm agender omniromantic omnidemisexual. Any pronouns are accepted (especially fae/faer). DM me on Instagram for more socials! I'm a beginning Voice Actor and I play Sims 4! Briggs Myers personality type is ISTJ",
  socials: [
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://www.youtube.com/channel/UCiGfk74nM0B4sMQ-T79Ptiw",
      color: "#ff0000",
      background: "#ffffff",
      hover: false,
    },
    {
      name: "Reddit",
      icon: faReddit,
      url: "https://www.reddit.com/u/Angel_Girl_2118",
      color: "#ff4500",
      background: "#cee3f8",
      hover: false,
    },
    {
      name: "Homepage",
      icon: faGlobe,
      url: "https://angelgirl2118.onuniverse.com",
      color: "#bc2fff",
      background: "#eea4f6",
      hover: false,
    },
  ],
};
