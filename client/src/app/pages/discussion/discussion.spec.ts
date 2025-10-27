import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discussion } from './discussion';

describe('Discussion', () => {
  let component: Discussion;
  let fixture: ComponentFixture<Discussion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Discussion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Discussion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
