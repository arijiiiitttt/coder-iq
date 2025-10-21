import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contests } from './contests';

describe('Contests', () => {
  let component: Contests;
  let fixture: ComponentFixture<Contests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
