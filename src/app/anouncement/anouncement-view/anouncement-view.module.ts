import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnouncementViewPageRoutingModule } from './anouncement-view-routing.module';

import { AnouncementViewPage } from './anouncement-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnouncementViewPageRoutingModule
  ],
  declarations: [AnouncementViewPage]
})
export class AnouncementViewPageModule {}
