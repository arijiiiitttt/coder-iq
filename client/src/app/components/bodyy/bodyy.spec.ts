import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodyy } from './bodyy';

describe('Bodyy', () => {
  let component: Bodyy;
  let fixture: ComponentFixture<Bodyy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodyy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bodyy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
