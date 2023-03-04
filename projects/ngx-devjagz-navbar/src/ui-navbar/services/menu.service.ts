import { Injectable } from '@angular/core';
import { MenuItemComponent } from 'projects/ngx-devjagz-navbar/src/ui-navbar/components/menu-item/menu-item.component';
import { MenuItem } from 'projects/ngx-devjagz-navbar/src/ui-navbar/interfaces/menu.interface';
import { uniqId } from 'projects/shared/utils/id-generator.util';

@Injectable()
export class MenuService {
  private menuItemsMap = new Map<string, MenuItem>();

  /**
   * Current menu items
   */
  get menuItems(): MenuItem[] {
    return Array.from(this.menuItemsMap.values());
  }

  /**
   * Register a menu item
   * @param menuItem - Item to be registered
   */
  registerMenuItems(menuItems: MenuItem[]): void {
    this.menuItemsMap = new Map<string, MenuItem>();
    for (const menuItem of menuItems) {
      this.registerMenuItem(menuItem);
    }
  }

  /**
   * Register a menu item
   * @param menuItem - Item to be registered
   */
  registerMenuItem(menuItem: MenuItem): void {
    const id = menuItem.id || uniqId('menu-item-');
    const menuItemCopy = menuItem;
    menuItemCopy.id = id;
    this.menuItemsMap.set(id, menuItemCopy);
  }

  /**
   * Update the map with a menu item
   * @param id - Id of the menu item
   * @param menuItem - Menu item to replace the previous one
   */
  updateMenuItem(id: string, menuItem: MenuItem): void {
    if (id && menuItem) {
      this.menuItemsMap.set(id, menuItem);
    }
  }

  /**
   * Add the component to the menu item
   * @param menuItem - Menu item to adding the component
   * @param component - Component to be added
   * @param menuItemElement - Element that is rendered for the menu item
   */
  addMenuItemComponent(menuItem: MenuItem, component: MenuItemComponent): void {
    const id = menuItem.id as string;
    const menuItemFound = this.menuItemsMap.get(id);
    if (menuItemFound) {
      menuItemFound.component = component;
      this.updateMenuItem(id, menuItemFound);
      this.setIndicatorWidth(component);
    }
  }

  /**
   * Run a method in the component in order to set the indicator width
   * @param component - Component from where getting the data
   */
  private setIndicatorWidth(component: MenuItemComponent): void {
    if (component) {
      const { host } = component;
      const menuItemElement = host.nativeElement as HTMLElement;
      const aTag = menuItemElement.getElementsByTagName('a')[0];
      // Allow to check if it is active in the next cycle
      setTimeout(() => {
        const isActive = aTag.classList.contains('active');
        if (isActive) {
          const domRect = menuItemElement.getBoundingClientRect();
          component.setIndicatorWidth(domRect);
        }
      }, 0);
    }
  }
}
