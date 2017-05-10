import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { WelcomeComponent }   from './welcome.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
@NgModule({
  imports:      [
      BrowserModule,
      RouterModule.forRoot([
          {path: 'register', component: RegisterComponent},
          {path: 'login', component: LoginComponent}
      ])
   ],
  declarations: [
      AppComponent, WelcomeComponent, RegisterComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
