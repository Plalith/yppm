import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerqeqComponent } from './prayerqeq.component';

describe('PrayerqeqComponent', () => {
  let component: PrayerqeqComponent;
  let fixture: ComponentFixture<PrayerqeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerqeqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerqeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
