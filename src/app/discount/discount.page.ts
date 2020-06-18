import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Discount } from '../models/discount';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.page.html',
  styleUrls: ['./discount.page.scss'],
})
export class DiscountPage implements OnInit {

  discountList: Discount[];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.discountList = undefined;
    this.fetchDiscountList();
  }

  async fetchDiscountList() {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl')
      + '/bill/discount',
      {
        method: 'POST',
        credentials: 'include',
      });
    this.discountList = await response.json();
  }

  goToDetailView(discountId: string) {
    this.navController.navigateForward('/discount/' + discountId);
  }
}

@Pipe({ name: 'discountStatusColor' })
export class DiscountStatusColorPipe implements PipeTransform {

    transform(status: string): string {
      switch (status) {
        case Discount.Status.Available:
          return 'success';
        case Discount.Status.Unavailable:
          return 'danger';
      }
    }
}