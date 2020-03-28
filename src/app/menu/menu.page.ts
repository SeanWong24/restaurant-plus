import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MenuCategory } from '../models/menu-category';
import { MenuItem } from '../models/menu-item';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuList: {
    category: MenuCategory,
    itemList: MenuItem[]
  }[] = [];

  constructor(private navControlor: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetchMenuList();
  }

  async fetchMenuList() {
    this.menuList = [];
    let response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
    const categoryList = await response.json() as MenuCategory[];
    response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/item');
    const itemList = await response.json() as MenuItem[];

    categoryList.forEach(category =>
      this.menuList.push({
        category,
        itemList: itemList.filter(item => item.categoryId === category.id)
      })
    );
  }

  goToCategoryView() {
    this.navControlor.navigateForward('/menu/category');
  }

}


@Pipe({ name: 'menuItemStatusColor' })
export class MenuItemStatusColorPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'Available':
        return 'primary';
      case 'Unavailable':
        return 'danger';
    }
  }

}