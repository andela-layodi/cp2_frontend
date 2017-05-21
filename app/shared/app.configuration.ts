import { Injectable } from '@angular/core';
// import { ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class Configuration {
    // server = 'http://localhost:5000/';
    // server = 'http://foodapi4demo.azurewebsites.net/';
    public Server: string = 'http://localhost:5000/';
    // apiUrl = 'api/';
    public ApiUrl: string = 'api/v1/';
    // title = 'eMeal';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public Title = 'Buckety'
}
