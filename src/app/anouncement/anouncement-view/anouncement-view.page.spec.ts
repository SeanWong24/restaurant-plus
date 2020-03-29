import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnouncementViewPage } from './anouncement-view.page';

describe('AnouncementViewPage', () => {
  let component: AnouncementViewPage;
  let fixture: ComponentFixture<AnouncementViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnouncementViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnouncementViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
