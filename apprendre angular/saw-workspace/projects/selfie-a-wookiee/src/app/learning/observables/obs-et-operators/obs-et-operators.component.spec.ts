import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsEtOperatorsComponent } from './obs-et-operators.component';

describe('ObsEtOperatorsComponent', () => {
  let component: ObsEtOperatorsComponent;
  let fixture: ComponentFixture<ObsEtOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObsEtOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsEtOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
