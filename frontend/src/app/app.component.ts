import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isAuth0Loading$ = this.auth.isLoading$;
  isLogged: Observable<boolean> = this.auth.isAuthenticated$;
  title = 'share-app';

  constructor(
    private auth: AuthService,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
