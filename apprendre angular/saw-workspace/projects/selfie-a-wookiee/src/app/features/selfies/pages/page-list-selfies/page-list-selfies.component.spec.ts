import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListSelfiesComponent } from './page-list-selfies.component';

describe('PageListSelfiesComponent', () => {
  let component: PageListSelfiesComponent;
  let fixture: ComponentFixture<PageListSelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListSelfiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
