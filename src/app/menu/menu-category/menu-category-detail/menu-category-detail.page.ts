import { Component, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu-category';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-category-detail',
  templateUrl: './menu-category-detail.page.html',
  styleUrls: ['./menu-category-detail.page.scss'],
})
export class MenuCategoryDetailPage implements OnInit {

  category = new MenuCategory();
  isCreatingNewCategory = false;

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const categoryName = this.activatedRoute.snapshot.paramMap.get('id');
    if (categoryName === 'new') {
      this.isCreatingNewCategory = true;
      this.category.name = 'New Category';
    } else {
      this.fetchCategory(categoryName);
    }
  }

  async fetchCategory(categoryId: string) {
    const response = await fetch(
      localStorage.getItem('serverApiBaseUrl') + '/menu/category?id=' + categoryId,
      {
        method: 'GET',
        credentials: 'include'
      }
    );
    this.category = (await response.json())[0];
  }

  async save() {
    if (this.isCreatingNewCategory && this.category.name) {
      const response = await fetch(
        localStorage.getItem('serverApiBaseUrl') +
        '/menu/category/add?' +
        'name=' + this.category.name,
        {
          method: 'POST',
          credentials: 'include'
        }
      );
      if (response.ok) {
        this.navController.navigateBack('/menu/category');
      }
    } else {
      const response = await fetch(
        localStorage.getItem('serverApiBaseUrl') +
        '/menu/category/modify?' +
        'id=' + this.category.id +
        '&name=' + this.category.name,
        {
          method: 'PUT',
          credentials: 'include'
        }
      );
      if (response.ok) {
        this.navController.navigateBack('/menu/category');
      }
    }
  }

}
