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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ShowprojectComponent,
    SkillspageComponent,
    ScrollAnimateDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
