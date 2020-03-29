import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnouncementModifyPage } from './anouncement-modify.page';

describe('AnouncementModifyPage', () => {
  let component: AnouncementModifyPage;
  let fixture: ComponentFixture<AnouncementModifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnouncementModifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnouncementModifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
