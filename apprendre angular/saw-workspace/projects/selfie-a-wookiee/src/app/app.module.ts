import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './learning/mon-premier/mon-premier.component';
import { ListSelfiesComponent } from './features/selfies/list-selfies/list-selfies.component';
import { SelfiesModule } from './features/selfies/selfies.module';
import { MenuAvecModuleModule } from './shared/ui/menu-avec-module/menu-avec-module.module';
import { MenuPrincipalComponent } from './shared/ui/menus/menu-principal/menu-principal.component';
import { MenuPrincipaleVUnComponent } from './shared/ui/menu-avec-module/menu-principale-v-un/menu-principale-v-un.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    // ListSelfiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelfiesModule,
    MenuAvecModuleModule,
    MenuPrincipalComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MenuPrincipaleVUnComponent
  ]
})
export class AppModule { }
