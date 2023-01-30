import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipaleVUnComponent } from './menu-principale-v-un.component';

describe('MenuPrincipaleVUnComponent', () => {
  let component: MenuPrincipaleVUnComponent;
  let fixture: ComponentFixture<MenuPrincipaleVUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrincipaleVUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipaleVUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
