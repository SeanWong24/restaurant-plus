import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableDetailPage } from './table-detail.page';

describe('TableDetailPage', () => {
  let component: TableDetailPage;
  let fixture: ComponentFixture<TableDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
