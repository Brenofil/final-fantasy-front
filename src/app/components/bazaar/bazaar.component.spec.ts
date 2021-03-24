import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaarComponent } from './bazaar.component';

describe('BazaarComponent', () => {
  let component: BazaarComponent;
  let fixture: ComponentFixture<BazaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BazaarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BazaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
