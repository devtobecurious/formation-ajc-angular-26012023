import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageMeteoComponent } from './affichage-meteo.component';

describe('AffichageMeteoComponent', () => {
  let component: AffichageMeteoComponent;
  let fixture: ComponentFixture<AffichageMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageMeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
