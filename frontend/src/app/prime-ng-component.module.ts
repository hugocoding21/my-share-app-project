import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ButtonModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
  ],
})
export class PrimeNgComponentModule {}
