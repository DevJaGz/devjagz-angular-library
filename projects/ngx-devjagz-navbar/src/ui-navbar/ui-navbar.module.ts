import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [NavbarComponent, MenuItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class UiNavbarModule {}
