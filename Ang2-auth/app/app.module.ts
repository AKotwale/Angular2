import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { PublicDealsComponent } from './public-deals.component';
import { PrivateDealsComponent } from './private-deals.component';
import { AppComponent }  from './app.component';
import { routing, routedComponents } from './app.routing';
import { DealService } from './deal.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [ 
             BrowserModule,             
             HttpModule,
             FormsModule,
             routing
           ],
  declarations: [ 
                  AppComponent,
                  routedComponents 
                ],
  providers : [
                 DealService,
                 HttpModule,
                 AUTH_PROVIDERS,
                 AuthService,
                 AuthGuard
              ],
  bootstrap:  [ 
                 AppComponent 
              ]
})
export class AppModule { }