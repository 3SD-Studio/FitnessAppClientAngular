import { Component } from '@angular/core';

@Component({
  selector: 'sd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

    // --------------------------------------------------
    //  Array of arrays to hold calendar dates
    //  5 rows (weeks), 7 columns (days)
    // --------------------------------------------------
    calendarArray: number[][]= [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 1, 2, 3, 4],
    ]


    // --------------------------------------------------
    //  Array of month names, used to set current month
    //  in month property
    // --------------------------------------------------
    monthNames : string[] = [
      'January', 'February', 'March', 
      'April', 'May', 'June', 
      'July', 'August', 'September',
      'October', 'November', 'December'
    ];


    // --------------------------------------------------
    //  Current month to display as calendar header
    // --------------------------------------------------
    month : string = this.monthNames[new Date().getMonth()].toUpperCase();


    // --------------------------------------------------
    //  Initialize calendarArray with dates
    //  2 past weeks, current week, 2 future weeks
    // --------------------------------------------------  
    constructor() { 
        let currentDate : Date = new Date();
        let counter : number = 13 + currentDate.getDay();
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 7; j++) {
            let tempDate : Date = new Date();
            tempDate.setDate(tempDate.getDate() - counter--);
            this.calendarArray[i][j] = tempDate.getDate();
          }
        }
    }
}
