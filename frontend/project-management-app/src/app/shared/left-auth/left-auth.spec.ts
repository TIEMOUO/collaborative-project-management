import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAuth } from './left-auth';

describe('LeftAuth', () => {
  let component: LeftAuth;
  let fixture: ComponentFixture<LeftAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftAuth],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
