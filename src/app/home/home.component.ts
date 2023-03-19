import { Component } from "@angular/core";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Social } from "src/interfaces/Social";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
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
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/naomis-novas",
      color: "#f5f5f5",
      background: "#333333",
      hover: false,
    },
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/nhcarrigan",
      color: "#FFFFFF",
      background: "#1DA1F2",
      hover: false,
    },
  ];
}
