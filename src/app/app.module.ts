import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NextworkoutComponent } from './nextworkout/nextworkout.component';
import { ProgressComponent } from './progress/progress.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarItemComponent } from './calendar-item/calendar-item.component';
import { CalendarService } from './calendar.service';
import { HomeComponent } from './home/home.component';
import { CreatorModule } from './creator/creator.module';
import { MainComponent } from './creator/main/main.component';
import { ProfileComponent } from './profile/profile.component';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'creator', component: MainComponent},
  { path: 'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    NextworkoutComponent,
    ProgressComponent,
    FooterComponent,
    CalendarItemComponent,
    HomeComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    CreatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
