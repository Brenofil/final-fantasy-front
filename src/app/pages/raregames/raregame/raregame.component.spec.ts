import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaregameComponent } from './raregame.component';

describe('RaregameComponent', () => {
  let component: RaregameComponent;
  let fixture: ComponentFixture<RaregameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaregameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaregameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
