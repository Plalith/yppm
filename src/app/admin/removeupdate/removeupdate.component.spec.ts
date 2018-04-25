import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveupdateComponent } from './removeupdate.component';

describe('RemoveupdateComponent', () => {
  let component: RemoveupdateComponent;
  let fixture: ComponentFixture<RemoveupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
