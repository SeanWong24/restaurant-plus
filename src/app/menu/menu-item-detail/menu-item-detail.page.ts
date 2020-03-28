import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuCategory } from 'src/app/models/menu-category';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.page.html',
  styleUrls: ['./menu-item-detail.page.scss'],
})
export class MenuItemDetailPage implements OnInit {

  menuItem = new MenuItem();
  menuCategoryList = [] as MenuCategory[];
  isCreatingNewItem = false;

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.fetchCategory();
    const itemId = this.activatedRoute.snapshot.paramMap.get("id");
    if (itemId === 'new') {
      this.isCreatingNewItem = true;
      this.menuItem.name = 'New Menu Item';
      this.menuItem.categoryId = this.menuCategoryList[0].id;
      this.menuItem.unitPrice = 0;
    } else {
      this.fetchMenuItem(itemId);
    }
  }

  async fetchCategory() {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
    this.menuCategoryList = await response.json();
  }

  async fetchMenuItem(itemId: string) {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/item?id=' + itemId);
    this.menuItem = await response.json();
  }

  async save() {
    if (this.isCreatingNewItem && this.menuItem.name && this.menuItem.name !== 'new') {
      const response = await fetch(
        localStorage.getItem('serverApiBaseUrl') +
        '/menu/item/add?' +
        'name=' + this.menuItem.name +
        '&shortName=' + this.menuItem.shortName +
        '&unitPrice=' + this.menuItem.unitPrice +
        '&status=' + this.menuItem.status +
        '&categoryId=' + this.menuItem.categoryId +
        '&gstRate=' + this.menuItem.gstRate +
        '&pstRate=' + this.menuItem.pstRate +
        '&lctRate=' + this.menuItem.lctRate +
        '&imageUrl=' + (this.menuItem.imageUrl || '(null)'),
        { method: 'POST' }
      );
      if (response.ok) {
        this.navController.navigateBack('/menu');
      }
    } else {
      const response = await fetch(
        localStorage.getItem('serverApiBaseUrl') +
        '/menu/item/modify?' +
        'id=' + this.menuItem.id +
        '&name=' + this.menuItem.name +
        '&shortName=' + this.menuItem.shortName +
        '&unitPrice=' + this.menuItem.unitPrice +
        '&status=' + this.menuItem.status +
        '&categoryId=' + this.menuItem.categoryId +
        '&gstRate=' + this.menuItem.gstRate +
        '&pstRate=' + this.menuItem.pstRate +
        '&lctRate=' + this.menuItem.lctRate +
        '&imageUrl=' + (this.menuItem.imageUrl || '(null)'),
        { method: 'PUT' }
      );
      if (response.ok) {
        this.navController.navigateBack('/menu');
      }
    }
  }

}
