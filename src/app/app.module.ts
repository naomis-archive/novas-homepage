import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaomiComponent } from './naomi/naomi.component';
import { SocialComponent } from './social/social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './team/team.component';
import { CommunityComponent } from './community/community.component';
import { NovasComponent } from './novas/novas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaomiComponent,
    SocialComponent,
    TeamComponent,
    CommunityComponent,
    NovasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
