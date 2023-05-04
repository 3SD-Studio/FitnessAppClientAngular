import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor() { }


  // --------------------------------------------------
  // Initialize two dimensional calendarArray with dates
  // (2 past weeks, current week, 2 future weeks)
  // --------------------------------------------------
  getCalendarArray() : CalendarDate[][] {
    // Initialize calendarArray with initial values
    let calendarArray: CalendarDate[][]= [
      [],
      [],
      [],
      [],
      [],
    ]

    // Counter to show 2 past weeks, current week, 2 future weeks
    let currentDate : Date = new Date();
    let counter : number = 13 + currentDate.getDay();
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        let tempDate : Date = new Date();
        tempDate.setDate(tempDate.getDate() - counter--);
        calendarArray[i][j] = new CalendarDate(tempDate);
      }
    }

    return calendarArray;
  }


  // --------------------------------------------------
  //  Current month to display as calendar header
  // --------------------------------------------------
  getMonthString() : string {
    // Array of month names, used to set current month
    let monthNames : string[] = [
      'January', 'February', 'March', 
      'April', 'May', 'June', 
      'July', 'August', 'September',
      'October', 'November', 'December'
    ];

    
    return monthNames[new Date().getMonth()].toUpperCase();
  }
}

export class CalendarDate {
  date: Date;
  colour: string;

  constructor(date: Date) {
    this.date = date;
    this.colour = this.calculateColour(date);
  }

  get Date() {
    return this.date;
  }
  set Date(value: Date) {
    this.date = value;
  }

  get Colour() {
    return this.colour;
  }


  private calculateColour(date: Date): string {
    let today = new Date();

    if (date < today) { 
      if (Math.random() < 0.33) {
        return '#556B2F';
      }
      else if (Math.random() < 0.07) {
        return 'red';
      }
  
      return '#f2f2f2';
    }
    else if (date > today) {
      if (Math.random() < 0.40) {
        return '#77CC77';
      }
      return '#f2f2f2';
    }
    else {
      return '#7070ff';
    } 
  }
}
