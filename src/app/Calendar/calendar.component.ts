import { Component } from '@angular/core';
import { CalendarDate, CalendarService } from '../calendar.service';

@Component({
  selector: 'sd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent {
    #calendarArray : CalendarDate[][];
    #month : string;

    constructor(service: CalendarService) {
        this.#calendarArray = service.getCalendarArray();
        this.#month = service.getMonthString();
    }

    get month(){
      return this.#month;
    }

    get calendarArray(){
      return this.#calendarArray;
    }

    set month(value: string){
      this.#month = value;
    }

    set calendarArray(value: CalendarDate[][]){
      this.#calendarArray = value;
    }

}
