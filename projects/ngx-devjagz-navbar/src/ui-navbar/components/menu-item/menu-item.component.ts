import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MenuItem } from 'projects/ngx-devjagz-navbar/src/ui-navbar/interfaces/menu.interface';
import { MenuService } from 'projects/ngx-devjagz-navbar/src/ui-navbar/services/menu.service';

@Component({
  selector: 'ngx-devjagz-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements AfterViewInit {
  private _menu!: MenuItem;
  @Input()
  set menu(menu: MenuItem) {
    this._menu = menu;
  }
  get menu(): MenuItem {
    return this._menu;
  }

  get host(): ElementRef {
    return this._host;
  }

  @Output()
  menuItemClicked = new EventEmitter<MenuItem>();

  @Output()
  onIndicatorWidth = new EventEmitter<DOMRect>();

  constructor(public menuService: MenuService, private _host: ElementRef) {}

  ngAfterViewInit(): void {
    this.menuService.addMenuItemComponent(this.menu, this);
  }

  /**
   * Emit the menu item clicked
   * @param menu - Menu item to emit
   */
  emitClickedMenuItem(menu: MenuItem): void {
    this.menuItemClicked.emit(menu);
    console.log(menu);
  }

  setIndicatorWidth(value: DOMRect): void {
    this.onIndicatorWidth.emit(value);
  }
}
