import { Component } from '@angular/core';
@Component({
  selector: 'register',
  templateUrl: `app/register.component.html`,
  styles: [`input.ng-invalid{border-left:5px solid orange;}`]
})
export class RegisterComponent {
    onSubmit(value: any){
        console.log(value);
    }
}
