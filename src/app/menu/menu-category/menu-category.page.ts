import { Component, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu-category';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-category-list',
  templateUrl: './menu-category.page.html',
  styleUrls: ['./menu-category.page.scss'],
})
export class MenuCategoryPage implements OnInit {

  categoryList: MenuCategory[];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.categoryList = undefined;
    this.fetchCategory();
  }

  async fetchCategory() {
    let response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
    this.categoryList = await response.json();
  }

  goToCategoryDetail(categoryId: string) {
    this.navController.navigateForward('menu/category/' + categoryId);
  }

}
