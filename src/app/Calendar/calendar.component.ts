import { Component } from '@angular/core';
import { CalendarDate, CalendarService } from '../calendar.service';

@Component({
  selector: 'sd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent {
    calendarArray : CalendarDate[][];
    month : string;

    constructor(service: CalendarService) { 
        this.calendarArray = service.getCalendarArray();
        this.month = service.getMonthString();
    }
}
