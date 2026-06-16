import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resultpage } from './resultpage';

describe('Resultpage', () => {
  let component: Resultpage;
  let fixture: ComponentFixture<Resultpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resultpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resultpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
