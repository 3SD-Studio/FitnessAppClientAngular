import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NextworkoutComponent } from './nextworkout/nextworkout.component';
import { ProgressComponent } from './progress/progress.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarItemComponent } from './calendar-item/calendar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    NextworkoutComponent,
    ProgressComponent,
    FooterComponent,
    CalendarItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
