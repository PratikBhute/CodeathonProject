
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  //imports: [CommonModule],
 
 template:  ``,
templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit{

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = true;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';
  
  static args: { 
      firstName: string;
      lastName: string; 
      username: string;
      mobileNo: string; 
      email: string;
      password: string;
   };

  

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  firstName!: string;
  lastName!: string;
  username!: string;
  mobileNo!: string;
  email!: string;
  password!: string;

  /**
   * Optional click handler
   */
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





