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
import { HomeComponent } from './home/home.component';
import { MainComponent } from './creator/main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ExerciseComponent } from './creator/exercise/exercise.component';
import { WorkoutComponent } from './creator/workout/workout.component';


import { CalendarService } from './calendar.service';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'creator', component: MainComponent, children:[
    {path: 'exercise', component: ExerciseComponent},
    {path: 'workout', component: WorkoutComponent}
  ]},
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
    ExerciseComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
