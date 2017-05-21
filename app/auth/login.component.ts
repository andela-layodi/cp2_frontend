import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';
import { BucketListService } from '../core/dataServices/bucketlist.service'

@Component({
  selector: 'login',
  templateUrl: `app/auth/login.component.html`,
  styles: [`input.ng-invalid{border-left:5px solid orange;}`]
})
export class LoginComponent implements OnInit{
    loading = false;
    error = '';
    available = false

    constructor(private bucketlistService: BucketListService, private router: Router) { }

    loginUser(username: string, password: string): any {
    this.loading = true;
    username = username.trim();
    password = password.trim();
    if (!username) { return; }
    if (!password) { return; }
    this.bucketlistService.loginUser(username, password).subscribe(
      result => {
          setTimeout(() => { this.router.navigate(['bucketlists']); }, 3);

         },
         error => {
              this.error = ("Invalid Username or password");
              this.loading = false;
         }


        );
  }

  register(): void {
    this.router.navigate(['auth/register']);
  }


  ngOnInit() {
  }
}
