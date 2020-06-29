import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Anouncement } from 'src/app/models/anouncement';

@Component({
  selector: 'app-anouncement-modify',
  templateUrl: './anouncement-modify.page.html',
  styleUrls: ['./anouncement-modify.page.scss'],
})
export class AnouncementModifyPage implements OnInit {

  anouncement = new Anouncement();
  isCreatingNewAnouncement = false;

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const anouncementId = this.activatedRoute.snapshot.paramMap.get('id');
    if (anouncementId === 'new') {
      this.isCreatingNewAnouncement = true;
      this.anouncement.title = 'New Anouncement';
    } else {
      this.fetchAnouncement(anouncementId);
    }
  }

  async fetchAnouncement(anouncementId: string) {
    const response = await fetch
      (localStorage.getItem('serverApiBaseUrl') + '/anouncement?id=' + anouncementId,
        {
          method: 'GET',
          credentials: "include"
        }
      );
    this.anouncement = (await response.json())[0];
  }

  async save() {
    if (this.anouncement.title) {
      if (this.isCreatingNewAnouncement) {
        const response = await fetch(
          localStorage.getItem('serverApiBaseUrl') + '/anouncement/add',
          {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.anouncement)
          }
        );
        if (response.ok) {
          this.navController.navigateBack('/anouncement');
        } else {
          delete this.anouncement.timeCreated;
          const alert = await this.alertController.create({
            header: 'Fail to Create Anouncement',
            message: 'Fail to create the anouncement, please try again.'
          });
          await alert.present();
        }
      } else {
        const response = await fetch(
          localStorage.getItem('serverApiBaseUrl') + '/anouncement/modify',
          {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.anouncement)
          }
        );
        if (response.ok) {
          this.navController.navigateBack('/anouncement');
        } else {
          const alert = await this.alertController.create({
            header: 'Fail to Save Anouncement',
            message: 'Fail to save the anouncement, please try again.'
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

  async delete() {
    if (!this.isCreatingNewAnouncement) {
      const alert = await this.alertController.create({
        header: 'Deleting an Anouncement',
        message: 'Are you sure to delete ' + this.anouncement.title + '?',
        buttons: [
          'Cancel',
          {
            text: "Delete",
            handler: async () => {
              const response = await fetch(
                localStorage.getItem('serverApiBaseUrl') + '/anouncement?id=' + this.anouncement.id,
                {
                  method: 'DELETE',
                  credentials: 'include'
                }
              );
              if (response.ok) {
                this.navController.navigateBack('/anouncement');
              }
            }
          }
        ]
      });
      await alert.present();
    }
  }

}
