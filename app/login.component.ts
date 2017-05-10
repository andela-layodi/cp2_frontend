import { Component } from '@angular/core';
@Component({
  selector: 'login',
  templateUrl: `app/login.component.html`,
  styles: [`input.ng-invalid{border-left:5px solid orange;}`]
})
export class LoginComponent {
    onSubmit(value: any){
        console.log(value);
    }
}
