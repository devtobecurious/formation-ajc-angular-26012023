import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfiesComponent } from './edit-selfies.component';

describe('EditSelfiesComponent', () => {
  let component: EditSelfiesComponent;
  let fixture: ComponentFixture<EditSelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
