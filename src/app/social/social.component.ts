import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-social",
  templateUrl: "./social.component.html",
  styleUrls: ["./social.component.css"],
})
export class SocialComponent {
  @Input() icon: IconDefinition = faQuestionCircle;
  @Input() name: string = "";
  @Input() url: string = "";
  @Input() color: string = "";
  @Input() background: string = "";
  @Input() hover: boolean = false;
}
