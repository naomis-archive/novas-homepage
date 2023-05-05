import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommunityComponent } from "./community/community.component";
import { HomeComponent } from "./home/home.component";
import { NaomiComponent } from "./naomi/naomi.component";
import { TeamComponent } from "./team/team.component";
import { NovasComponent } from "./novas/novas.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "naomi", component: NaomiComponent },
  { path: "team", component: TeamComponent },
  { path: "community", component: CommunityComponent },
  { path: "novas", component: NovasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
