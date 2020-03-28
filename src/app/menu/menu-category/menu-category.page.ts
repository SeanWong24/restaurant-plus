import { Component, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu-category';

@Component({
  selector: 'app-menu-category-list',
  templateUrl: './menu-category.page.html',
  styleUrls: ['./menu-category.page.scss'],
})
export class MenuCategoryPage implements OnInit {

  categoryList = [] as MenuCategory[];

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fetchCategory();
  }

  async fetchCategory() {
    let response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
    this.categoryList = await response.json();
  }

}
