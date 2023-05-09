import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Assets } from "src/interfaces/Assets";
import { Pose } from "src/interfaces/Pose";

@Injectable({
  providedIn: "root",
})
export class AssetsService {
  private _data: Assets;
  constructor(private http: HttpClient) {
    this._data = {
      poses: [],
    };
  }

  public fetchPoses(): Observable<Pose[]> {
    if (this._data.poses.length) {
      return of(this._data.poses);
    }
    const poses = this.http.get<Pose[]>(
      "https://asset-list.naomi.lgbt/json/novas/poses.json"
    );
    poses.subscribe((poses) => (this._data.poses = poses));
    return poses;
  }
}
