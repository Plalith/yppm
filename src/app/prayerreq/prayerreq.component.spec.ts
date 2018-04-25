import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerreqComponent } from './prayerreq.component';

describe('PrayerreqComponent', () => {
  let component: PrayerreqComponent;
  let fixture: ComponentFixture<PrayerreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
