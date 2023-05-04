import { Component, Input } from '@angular/core';
import { CalendarDate } from '../calendar.service';

@Component({
  selector: 'sd-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent {
  @Input() day: CalendarDate = new CalendarDate(new Date);
}
