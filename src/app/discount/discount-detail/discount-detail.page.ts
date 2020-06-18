import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/models/discount';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DiscountStatusColorPipe } from '../discount.page';

@Component({
  selector: 'app-discount-detail',
  templateUrl: './discount-detail.page.html',
  styleUrls: ['./discount-detail.page.scss'],
})
export class DiscountDetailPage implements OnInit {

  discount = new Discount();
  isCreatingNewDiscount = false;
  discountTypeList = [] as string[];
  discountStatusList = [] as string[];

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const discountId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(discountId);
    if (discountId === 'new') {
      this.isCreatingNewDiscount = true;
      this.discount.name = 'New Discount';
    } else {
      this.fetchDiscount(discountId);
    }

    Object.values(Discount.Type).forEach(element => {
      this.discountTypeList.push(element);
    });

    Object.values(Discount.Status).forEach(element => {
      this.discountStatusList.push(element);
    });
  }

  async fetchDiscount(discountId: string) {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/bill/discount',
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([discountId])
      });
    this.discount = (await response.json() as Discount[])[0];
  }

  async save() {
    if (this.discount.name && this.discount.name !== 'null' && this.discount.value > 0) {
      if (this.isCreatingNewDiscount) {
        const response = await fetch(
          localStorage.getItem('serverApiBaseUrl') +
          '/bill/discount/add?' +
          'name=' + this.discount.name +
          '&type=' + this.discount.type +
          '&value=' + this.discount.value +
          '&status=' + this.discount.status,
          { method: 'POST' }
        );
        if (response.ok) {
          this.navController.navigateBack('/discount');
        } else {
          const alert = await this.alertController.create({
            header: 'Fail to Create Discount',
            message: 'Fail to create the Discount, please try again.'
          });
          await alert.present();
        }
      } else {
        const response = await fetch(
          localStorage.getItem('serverApiBaseUrl') + '/bill/discount/modify?id=' + this.discount.id + '&name=' + this.discount.name,
          { method: 'PUT' }
        );
        if (response.ok) {
          this.navController.navigateBack('/discount');
        } else {
          const alert = await this.alertController.create({
            header: 'Fail to Save Discount',
            message: 'Fail to save the discount, please try again.'
          });
          await alert.present();
        }
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Invalid Values',
        message: 'There are one or more invalid values, please check and try again.'
      });
      await alert.present();
    }
  }

  async toggleAvailability() {
    const response = await fetch(
      localStorage.getItem('serverApiBaseUrl') + '/bill/discount/toggle-availability?id=' + this.discount.id,
      { method: 'PUT' }
    );
    if (response.ok) {
      this.navController.navigateBack('/discount');
    } else {
      const alert = await this.alertController.create({
        header: 'Fail to Toggle Availability',
        message: 'Fail to toggle availability of the discount, please try again.'
      });
      await alert.present();
    }
  }
}
