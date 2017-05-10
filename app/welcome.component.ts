import { Component } from '@angular/core';

@Component({
    selector: 'lavender',
    template: `<nav align='center'>
                        <a routerLink="/register" routerLinkActive="active">Register</a>
                        <a routerLink="/login" routerLinkActive="active">Log In</a>
                </nav>
                <router-outlet></router-outlet>`
})

export class WelcomeComponent { }
