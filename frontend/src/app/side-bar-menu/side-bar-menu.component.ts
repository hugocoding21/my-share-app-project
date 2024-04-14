import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.scss',
})
export class SideBarMenuComponent {
  sidebarVisible: boolean = true;
  constructor(public auth: AuthService) {}
}
