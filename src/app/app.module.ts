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


const rouets = [
  { path: '', component: HomeComponent },
  { path: 'test', component: CalendarComponent },
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
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rouets)
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
