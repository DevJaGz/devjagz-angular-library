import { Component } from '@angular/core';
import { MenuItem } from 'projects/ngx-devjagz-navbar/src/ui-navbar/interfaces/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-devjagz-library';
  menu: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/',
    },
    {
      label: 'Settings',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Documentation',
    },
  ];
}
