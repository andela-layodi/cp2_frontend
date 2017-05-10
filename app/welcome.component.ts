import { Component } from '@angular/core';

@Component({
    selector: 'welcome-page',
    template: `<nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Bucket-y!</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                      <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown" href="#">View<span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">Bucketlists</a></li>
                            <li><a href="#">Items</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Update</a></li>
                        <li><a href="#">Delete</a></li>
                      </ul>
                      <ul class="nav navbar-nav navbar-right">
                        <li><a routerLink="/register" routerLinkActive="active"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a routerLink="/login" routerLinkActive="active"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <router-outlet></router-outlet>
              <div id='logo' align='center'>
                <img src='images/buckety_icon.png' style='width:230px;height:230px;'>
              </div>
              <div id='welcome'>
                <img src='images/buckety4_logo.jpg' id='image'>
              </div>`
})

export class WelcomeComponent { }
