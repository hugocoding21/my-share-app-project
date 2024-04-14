import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgComponentModule } from './prime-ng-component.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { AuthorisationModule } from './auth/authorisation.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, SideBarMenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PrimeNgComponentModule,
    FormsModule,
    AuthorisationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
