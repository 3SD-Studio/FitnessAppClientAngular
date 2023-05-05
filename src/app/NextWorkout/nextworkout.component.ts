import { Component } from '@angular/core';

@Component({
  selector: 'sd-nextworkout',
  templateUrl: './nextworkout.component.html',
  styleUrls: ['./nextworkout.component.css']
})
export class NextworkoutComponent {
  nextWorkoutDate : string;
  chosenSet : string;

  exerciseSetsList = [ 
    'Legs',
    'Arms',
    'Chest',
    'Back',
    'Cardio'
  ];

  constructor() {
    this.nextWorkoutDate = new Date().toLocaleDateString();
    this.chosenSet = this.exerciseSetsList[getRandomInt(5)];
  }
}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}