import { Component } from '@angular/core';
import { Configuration } from './shared/app.configuration';
@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`
})
export class AppComponent {

    title: string;

    constructor(public configuration: Configuration) {
        this.title = configuration.Title;
    }
}
