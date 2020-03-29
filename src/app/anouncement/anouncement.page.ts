import { Component, OnInit } from '@angular/core';
import { Anouncement } from "../models/anouncement";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anouncement',
  templateUrl: './anouncement.page.html',
  styleUrls: ['./anouncement.page.scss'],
})
export class AnouncementPage implements OnInit {

  anouncementList: Anouncement[];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.anouncementList = undefined;
    this.fetchAnouncementList();
  }

  async fetchAnouncementList() {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement');
    this.anouncementList = await response.json();
  }

  goToModifyView(anouncementId: string) {
    this.navController.navigateForward('/anouncement/modify/' + anouncementId);
  }

  goToPreviewView(anouncementId: string) {
    this.navController.navigateForward('/anouncement/' + anouncementId);
  }

}
