import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelfiesComponent } from './list-selfies.component';

describe('ListSelfiesComponent', () => {
  let component: ListSelfiesComponent;
  let fixture: ComponentFixture<ListSelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSelfiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
