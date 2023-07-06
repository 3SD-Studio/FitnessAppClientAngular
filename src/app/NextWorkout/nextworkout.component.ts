import { Component } from '@angular/core';

@Component({
  selector: 'sd-nextworkout',
  templateUrl: './nextworkout.component.html',
  styleUrls: ['./nextworkout.component.css']
})
export class NextworkoutComponent {
  #nextWorkoutDate : string;
  #chosenSet : string;

  #exerciseSetsList = [
    'Legs',
    'Arms',
    'Chest',
    'Back',
    'Cardio'
  ];

  constructor() {
    this.#nextWorkoutDate = new Date().toLocaleDateString();
    this.#chosenSet = this.#exerciseSetsList[getRandomInt(5)];
  }

  get nextWorkoutDate(){
    return this.#nextWorkoutDate;
  }

  get chosenSet(){
    return this.#chosenSet;
  }

  get exerciseSetsList(){
    return this.#exerciseSetsList;
  }

  set nextWorkoutDate(value: string){
    this.#nextWorkoutDate = value;
  }

  set chosenSet(value: string){
    this.#chosenSet = value;
  }

  set exerciseSetsList(value: string[]){
    this.#exerciseSetsList = value;
  }
}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}
