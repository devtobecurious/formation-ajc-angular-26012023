import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPlanetsComponent } from './page-list-planets.component';

describe('PageListPlanetsComponent', () => {
  let component: PageListPlanetsComponent;
  let fixture: ComponentFixture<PageListPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
