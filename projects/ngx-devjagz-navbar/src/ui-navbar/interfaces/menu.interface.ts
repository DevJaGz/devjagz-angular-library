import { ElementRef } from '@angular/core';
import { MenuItemComponent } from 'projects/ngx-devjagz-navbar/src/ui-navbar/components/menu-item/menu-item.component';

export interface MenuItem<T = any> {
  id?: string;
  label: string;
  routerLink?: string | string[];
  routerLinkActive?: string;
  subMenu?: MenuItem[];
  data?: T;
  component?: MenuItemComponent;
  element?: ElementRef;
}
