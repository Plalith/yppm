import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmtmComponent } from './rmtm.component';

describe('RmtmComponent', () => {
  let component: RmtmComponent;
  let fixture: ComponentFixture<RmtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
