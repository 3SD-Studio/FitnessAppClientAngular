import { Component, Input } from '@angular/core';

@Component({
  selector: 'sd-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent {
  @Input() day: number = 0;
}
