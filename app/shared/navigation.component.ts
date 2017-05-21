import { Configuration } from './app.configuration';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../core/services/currentUser.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    selector: 'navigation',
    templateUrl: 'app/shared/navigation.component.html'
})

export class NavigationComponent {

    constructor(
        public _configuration: Configuration,
        public authenticationService: AuthenticationService, private router: Router) { }

    get user(): any {
    return localStorage.getItem('currentUser');
}
    logout($event: any) {
        $event.preventDefault();
        this.authenticationService.logoutUser();
        this.router.navigate(['home']);
    }

    doNothing($event: any) {
        $event.preventDefault();
    }
}
