import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ShowprojectComponent } from './showproject/showproject.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
import { ScrollAnimateDirective } from './scroll-animate.directive';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { environment } from '../environments/environment';
import { ExperienceJourneyComponent } from './experience-journey/experience-journey.component';
import { ToolsMarqueeComponent } from './tools-marquee/tools-marquee.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ShowprojectComponent,
    SkillspageComponent,
    ScrollAnimateDirective,
    ExperienceJourneyComponent,
    ToolsMarqueeComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
