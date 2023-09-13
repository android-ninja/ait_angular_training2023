import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //One-way binding
  name:string = "Sample Project";
  updatedName:string = "";

  constructor(){
    console.log(this.name);
  }

  printData()
  {

    this.updatedName = this.name;
    // console.log(this.name);
    // API to capture the data
  }


}
