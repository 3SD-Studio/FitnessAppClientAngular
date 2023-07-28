import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:String;
  surname:String;
  tel_num:String|Number;
  sex:String;
  address:String;
  town:String;
  country:String;
  email:String;

  constructor() {
    this.name = "Dawid";
    this.surname = "Jeziorski";
    this.tel_num = 123456789;
    this.email = "dawjez123@gmail.com"
    this.sex = "male";
    this.address = "Wrzosowa 15";
    this.town= "Bazantowo";
    this.country = "Poland";
   }

  ngOnInit(): void {
  }

}
