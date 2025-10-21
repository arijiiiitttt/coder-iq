import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problemset } from './problemset';

describe('Problemset', () => {
  let component: Problemset;
  let fixture: ComponentFixture<Problemset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problemset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Problemset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
