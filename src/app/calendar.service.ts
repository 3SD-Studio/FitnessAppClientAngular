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
  getCalendarArray() : number[][] {
    // Initialize calendarArray with initial values
    let calendarArray: number[][]= [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 1, 2, 3, 4],
    ]

    // Counter to show 2 past weeks, current week, 2 future weeks
    let currentDate : Date = new Date();
    let counter : number = 13 + currentDate.getDay();
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        let tempDate : Date = new Date();
        tempDate.setDate(tempDate.getDate() - counter--);
        calendarArray[i][j] = tempDate.getDate();
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
