import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommunityComponent } from "./community/community.component";
import { HomeComponent } from "./home/home.component";
import { NaomiComponent } from "./naomi/naomi.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "naomi", component: NaomiComponent },
  { path: "team", component: TeamComponent },
  { path: "community", component: CommunityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
