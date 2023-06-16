import { Component } from '@angular/core';

export interface registaration{
  firstName: String;
  lastName: String;
  userName: String;
  email :String ;
  password:String;
  mobileNo: Number;
  gender: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'GUI_Registration';
}
