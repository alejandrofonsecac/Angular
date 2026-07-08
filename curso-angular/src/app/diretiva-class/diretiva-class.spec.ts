import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaClass } from './diretiva-class';

describe('DiretivaClass', () => {
  let component: DiretivaClass;
  let fixture: ComponentFixture<DiretivaClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaClass],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivaClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
