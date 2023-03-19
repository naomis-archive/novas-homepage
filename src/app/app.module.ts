import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NaomiComponent } from './naomi/naomi.component';
import { SocialComponent } from './social/social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './team/team.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NaomiComponent,
    SocialComponent,
    TeamComponent,
    CommunityComponent
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
