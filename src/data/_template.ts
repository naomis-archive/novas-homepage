/**
 * This is the template for a team profile. Copy this file and rename it to
 * your username. Update the export const to your username. Then update the
 * properties to your information.
 *
 * Finally, update the Team.ts file in the parent directory to include your
 * profile.
 *
 * If you need help, ask in our Discord.
 */
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Staff } from "../interfaces/Staff";

export const _template: Staff = {
  name: "Your Name",
  // remove the roles that don't apply
  roles: ["admin", "developer", "support", "moderator", "artist"],
  avatarUrl: "https://cdn.naomi.lgbt/avatars/your-username.png",
  bio: "Your bio here.",
  socials: [
    {
      name: "Discord",
      // Icon from FontAwesome - ask Naomi if you need help
      icon: faDiscord,
      // URL to the social
      url: "https://chat.naomi.lgbt",
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
