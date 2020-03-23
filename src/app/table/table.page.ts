import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Table } from '../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  tableList: Table[];

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.fetchTableList();
  }

  async fetchTableList() {
    const response = await fetch(localStorage.getItem('serverApiBaseUrl') + '/table');
    this.tableList = await response.json();
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
