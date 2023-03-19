import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Staff } from "../../../interfaces/Staff";

export const VyVyVi: Staff = {
  name: "Vyvy-Vi",
  // remove the roles that don't apply
  roles: ["support", "moderator"],
  avatarUrl: "https://cdn.naomi.lgbt/avatars/your-username.png",
  bio: "Friendly neighbourhood Potato Developer :)",
  socials: [
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/Vyvy_viM",
      color: "#1da1f2",
      background: "#f5f8fa",
      hover: false,
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/Vyvy-vi",
      color: "#333333",
      background: "#f5f5f5",
      hover: false,
    },
  ],
};
