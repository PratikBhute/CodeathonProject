
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface registar{
  firstName: String;
  lastName: String;
  userName: String;
  email :String ;
  password:String;
  mobileNo: Number;
 }
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  firstName!: string;
  lastName!: string;
  username!: string;
  mobileNo!: string;
  email!: string;
  password!: string;

  @Output() register: EventEmitter<any> = new EventEmitter();

  onRegister() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      mobileNo: this.mobileNo,
      email: this.email,
      password: this.password,
    };
    this.register.emit(user);
  console.log('User:', user);

  }
}




