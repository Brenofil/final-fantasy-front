import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaregamesComponent } from './raregames.component';

describe('RaregamesComponent', () => {
  let component: RaregamesComponent;
  let fixture: ComponentFixture<RaregamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaregamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaregamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
