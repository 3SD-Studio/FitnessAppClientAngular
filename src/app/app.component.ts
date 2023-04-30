import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientangular';
  
  // TEST IF CODE CAN CONNECT TO API. ONLY FOR TESTING PURPOSES
  ngOnInit() : void {
    fetch("https://localhost:7093/WeatherForecast").then((response) => response.json()).then((data) => console.log(data));
  }
}
