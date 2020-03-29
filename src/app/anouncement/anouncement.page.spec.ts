import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnouncementPage } from './anouncement.page';

describe('AnouncementPage', () => {
  let component: AnouncementPage;
  let fixture: ComponentFixture<AnouncementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnouncementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
