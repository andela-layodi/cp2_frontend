import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service'
@Component({
  selector: 'register',
  templateUrl: `app/auth/register.component.html`,
  styles: [`input.ng-invalid{border-left:5px solid orange;}`]
})
export class RegisterComponent implements OnInit {
    loading = false;
    error = '';
    message = '';
    constructor(private bucketlistService: BucketListService, private router: Router) { }

registerUser(username: string, password: string): any {
  username = username.trim();
  password = password.trim();
  if (!username) { return; }
  this.bucketlistService.registerUser(username, password).subscribe(
      result => {
        // Redirects to Log In page
        this.message = ("Registered successfully...");
        setTimeout(() => { this.router.navigate(['auth/login']); }, 300);

       },
       error => {
        //  Return an alert if registration was unsuccessful
            this.error = ("Registration Failed. Please try again");
            this.loading = false;
       }
      );

}

logIn(): void {
  // Login Url
  this.router.navigate(['auth/login']);
}

ngOnInit() {

}

}
