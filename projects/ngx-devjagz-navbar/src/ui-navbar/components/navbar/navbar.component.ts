import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MenuItem } from 'projects/ngx-devjagz-navbar/src/ui-navbar/interfaces/menu.interface';
import { MenuService } from 'projects/ngx-devjagz-navbar/src/ui-navbar/services/menu.service';

@Component({
  selector: 'ngx-devjagz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MenuService],
})
export class NavbarComponent {
  @Input()
  set menuItems(menuItems: MenuItem[]) {
    this.menuService.registerMenuItems(menuItems);
  }

  @Output()
  menuItemClicked = new EventEmitter<MenuItem>();

  constructor(public menuService: MenuService, private _host: ElementRef) {}

  /**
   * Emit the menu item clicked
   * @param menu - Menu item to emit
   */
  emitClickedMenuItem(menu: MenuItem): void {
    this.menuItemClicked.emit(menu);
  }

  setIndicatorWidth(domRect: DOMRect): void {
    const host = this._host.nativeElement as HTMLElement;
    console.log('setIndicatorWidth', domRect.width);
    host.style.setProperty('--indicator-width', `${domRect.width}px`);
  }
}
