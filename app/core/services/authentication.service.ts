import { Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpWrapperService } from './httpWrapper.service';
import { Router } from '@angular/router';
import { CurrentUserService } from './currentUser.service';
import { Configuration } from '../../shared/app.configuration';
import { Token } from '../../shared/models/token';

@Injectable()
export class AuthenticationService {

    public redirectUrl: string;

    constructor(private http: Http,
        private currentUserService: CurrentUserService,
        private router: Router,
        private configuration: Configuration) {

    }
    token = localStorage.getItem('currentUser');

    loginUser(username: string, password: string) {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' }) });

        return this.http.post(this.configuration.Server + this.configuration.ApiUrl + 'auth/login', JSON.stringify({ username: username, password: password }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                console.log(token)
                if (token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', token);
                }
            });
    }

    logoutUser() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
