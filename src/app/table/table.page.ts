import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Table } from '../models/table';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  tableList: Table[];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.tableList = undefined;
    this.fetchTableList();
  }

  async fetchTableList() {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/table');
    this.tableList = await response.json();
  }

  goToDetailView(tableId: string) {
    this.navController.navigateForward('/table/' + tableId);
  }

}

@Pipe({ name: 'tableStatusColor' })
export class TableStatusColorPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case Table.Status.Free:
        return 'secondary';
      case Table.Status.Using:
        return 'success';
      case Table.Status.Reserved:
        return 'tertiary';
      case Table.Status.Dirty:
        return 'warning';
      case Table.Status.Unavailable:
        return 'danger';
    }
  }

}
