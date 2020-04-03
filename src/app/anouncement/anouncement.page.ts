import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Anouncement } from "../models/anouncement";
import { NavController } from '@ionic/angular';
import { Table } from '../models/table';

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

  ionViewDidEnter() {
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


@Pipe({ name: 'timeLocalISOString' })
export class TimeLocalISOStringPipe implements PipeTransform {

  transform(timeISOString: string): string {
    if (timeISOString) {
      const standardTime = new Date(timeISOString);
      const timezoneOffset = standardTime.getTimezoneOffset() * 60000;
      return new Date(standardTime.getTime() - timezoneOffset).toISOString();
    } else {
      return timeISOString;
    }
  }

}