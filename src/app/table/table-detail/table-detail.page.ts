import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.page.html',
  styleUrls: ['./table-detail.page.scss'],
})
export class TableDetailPage implements OnInit {

  table = new Table();
  isCreatingNewTable = false;

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const tableId = this.activatedRoute.snapshot.paramMap.get('id');
    if (tableId === 'new') {
      this.isCreatingNewTable = true;
      this.table.name = 'New Table';
      this.table.capacity = 0;
    } else {
      this.fetchTable(tableId);
    }
  }

  async fetchTable(tableId: string) {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/table?id=' + tableId);
    this.table = await response.json();
  }

  async save() {
    if (this.table.name && this.table.name !== 'null' && this.table.capacity >= 0) {
      if (this.isCreatingNewTable) {
        const response = await fetch(
          localStorage.getItem('serverApiBaseUrl') + '/table/add?name=' + this.table.name + '&capacity=' + this.table.capacity,
          { method: 'POST' }
        );
        if (response.ok) {
          this.navController.navigateBack('/table');
        } else {
          const alert = await this.alertController.create({
            header: 'Fail to Create Table',
            message: 'Fail to create the table, please try again.'
          });
          await alert.present();
        }
      } else {
        const response = await fetch(
          localStorage.getItem('serverApiBaseUrl') + '/table/modify?id=' + this.table.id + '&name=' + this.table.name + '&capacity=' + this.table.capacity,
          { method: 'PUT' }
        );
        if (response.ok) {
          this.navController.navigateBack('/table');
        } else {
          const alert = await this.alertController.create({
            header: 'Fail to Save Table',
            message: 'Fail to save the table, please try again.'
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
      localStorage.getItem('serverApiBaseUrl') + '/table/toggle-availability?id=' + this.table.id,
      { method: 'PUT' }
    );
    if (response.ok) {
      this.navController.navigateBack('/table');
    } else {
      const alert = await this.alertController.create({
        header: 'Fail to Toggle Availability',
        message: 'Fail to toggle availability of the table, please try again.'
      });
      await alert.present();
    }
  }

  async delete() {
    if (!this.isCreatingNewTable) {
      const alert = await this.alertController.create({
        header: 'Deleting a Table',
        message: 'Are you sure to delete ' + this.table.name + '?',
        buttons: [
          'Cancel',
          {
            text: "Delete",
            handler: async () => {
              const response = await fetch(
                localStorage.getItem('serverApiBaseUrl') + '/table/delete?id=' + this.table.id,
                { method: 'DELETE' }
              );
              if (response.ok) {
                this.navController.navigateBack('/table');
              }
            }
          }
        ]
      });
      await alert.present();
    }
  }

}
