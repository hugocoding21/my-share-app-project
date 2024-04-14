import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { PrimeNgComponentModule } from '../prime-ng-component.module';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgComponentModule,
    AuthModule.forRoot(environment.auth0),
  ],
  exports: [LoginButtonComponent, LogoutButtonComponent, UserProfileComponent],
})
export class AuthorisationModule {}
