import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplooooooo } from './exemplooooooo';

describe('Exemplooooooo', () => {
  let component: Exemplooooooo;
  let fixture: ComponentFixture<Exemplooooooo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplooooooo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplooooooo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
