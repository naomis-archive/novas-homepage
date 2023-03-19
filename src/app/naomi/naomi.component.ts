import { Component } from "@angular/core";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Social } from "src/interfaces/Social";

@Component({
  selector: "app-naomi",
  templateUrl: "./naomi.component.html",
  styleUrls: ["./naomi.component.css"],
})
export class NaomiComponent {
  socials: Social[] = [
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
  ];
}
