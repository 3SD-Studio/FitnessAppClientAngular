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
import { ProfileComponent } from './profile/profile.component';
import { CreatorComponent } from './creator/creator.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';


import { CalendarService } from './calendar.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'creator', component: CreatorComponent },
  { path: 'creator/exercise', component: CreateExerciseComponent},
  { path: 'creator/workout', component: CreateWorkoutComponent},
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
    CreateExerciseComponent,
    CreateWorkoutComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
