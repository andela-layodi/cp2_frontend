import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';
import { WelcomeComponent }   from './auth/welcome.component';
import { routingComponents } from './app-routing.module';
import { Configuration } from './shared/app.configuration';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { BucketListService } from './core/dataServices/bucketlist.service'
@NgModule({
  imports:      [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      SharedModule,
      CoreModule
   ],
  declarations: [
      AppComponent, WelcomeComponent, routingComponents ],
  providers: [
      Configuration,
      BucketListService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
