import { Component } from "@angular/core";
import { Team } from "../_data/Team";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent {
  admins = Team.filter((member) => member.roles.includes("admin")).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  developers = Team.filter((member) => member.roles.includes("developer")).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  support = Team.filter((member) => member.roles.includes("support")).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  moderators = Team.filter((member) => member.roles.includes("moderator")).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  artists = Team.filter((member) => member.roles.includes("artist")).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  view: "admins" | "developers" | "support" | "moderators" | "artists" =
    "admins";

  setView(
    view: "admins" | "developers" | "support" | "moderators" | "artists"
  ) {
    this.view = view;
    window.scrollTo({ top: 0 });
  }
}
