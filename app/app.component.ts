import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<welcome-page></welcome-page>
             <nav align='center'>
                <a routerLink="/register" routerLinkActive="active"></a>
                <a routerLink="/login" routerLinkActive="active"></a>
             </nav>
             <router-outlet></router-outlet>`
})
export class AppComponent { }
