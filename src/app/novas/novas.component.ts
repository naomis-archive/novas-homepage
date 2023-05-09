import { Component } from "@angular/core";
import { HelpersService } from "../helpers.service";
import { AssetsService } from "../assets.service";
import { Pose } from "src/interfaces/Pose";

type viewType = "intro" | "pose";

@Component({
  selector: "app-novas",
  templateUrl: "./novas.component.html",
  styleUrls: ["./novas.component.css"],
})
export class NovasComponent {
  public view: viewType = "intro";
  public poses: Pose[] = [];
  public currentPortraitIndex = 0;
  public currentEmoteIndex = 0;
  public currentPoseIndex = 0;

  constructor(private assetService: AssetsService) {
    this.assetService.fetchPoses().subscribe((poses) => {
      this.poses = poses.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  changeView(name: viewType) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  nextPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === this.poses.length - 1
        ? 0
        : this.currentPoseIndex + 1;
  }

  previousPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === 0
        ? this.poses.length - 1
        : this.currentPoseIndex - 1;
  }

  selectPose(index: string) {
    this.currentPoseIndex = parseInt(index);
  }
}
