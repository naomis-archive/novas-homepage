import { Component, OnInit } from "@angular/core";
import { HelpersService } from "../helpers.service";
import { poses } from "src/data/poses";

type viewType = "intro" | "pose";

@Component({
  selector: "app-novas",
  templateUrl: "./novas.component.html",
  styleUrls: ["./novas.component.css"],
})
export class NovasComponent implements OnInit {
  public view: viewType = "intro";
  public poses: string[] = [];
  public currentPortraitIndex = 0;
  public currentEmoteIndex = 0;
  public currentPoseIndex = 0;

  ngOnInit(): void {
    this.poses = poses.sort((a, b) =>
      HelpersService.numericSortWithHyphen(
        HelpersService.parseFileName(a),
        HelpersService.parseFileName(b)
      )
    );
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

  getPoseName(index: number) {
    const fileName = this.poses[index];
    const withoutExtension = fileName.split(".")[0];
    const [name, number] = withoutExtension.split("-");
    const titleCasedName = `${name[0].toUpperCase()}${name.slice(1)}`;
    return number ? `${titleCasedName} ${number}` : titleCasedName;
  }
}
