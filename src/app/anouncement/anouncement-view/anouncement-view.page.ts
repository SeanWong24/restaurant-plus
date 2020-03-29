import { Component, OnInit } from '@angular/core';
import { Anouncement } from 'src/app/models/anouncement';
import { ActivatedRoute } from '@angular/router';
import * as showdown from "showdown";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anouncement-view',
  templateUrl: './anouncement-view.page.html',
  styleUrls: ['./anouncement-view.page.scss'],
})
export class AnouncementViewPage implements OnInit {

  anouncement = new Anouncement();

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const anouncementId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchAnouncement(anouncementId);
  }

  async fetchAnouncement(anouncementId: string) {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement?id=' + anouncementId);
    this.anouncement = await response.json();
  }

  convertMarkdownToHtml(markdownContent: string) {
    return new showdown.Converter().makeHtml(markdownContent);
  }

  goToModifyView() {
    const anouncementId = this.activatedRoute.snapshot.paramMap.get('id');
    this.navController.navigateForward('/anouncement/modify/' + anouncementId);
  }

}
