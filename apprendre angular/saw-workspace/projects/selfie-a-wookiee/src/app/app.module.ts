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
import { ListPlanetsService } from './features/planets/services/list-planets.service';
import { PlanetsModule } from './features/planets/planets.module';
import { HttpClientModule } from '@angular/common/http';
import { MaFirstCharacterPipe } from './shared/ui/ma-first-character.pipe';
import { DiscoverObservableComponent } from './learning/observables/discover-observable/discover-observable.component';
import { ObsEtOperatorsComponent } from './learning/observables/obs-et-operators/obs-et-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    MaFirstCharacterPipe,
    // ListSelfiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SelfiesModule,
    PlanetsModule,
    MenuAvecModuleModule,
    MenuPrincipalComponent,
    DiscoverObservableComponent,
    ObsEtOperatorsComponent
  ],
  providers: [
    // ListPlanetsService
  ],
  bootstrap: [
    AppComponent,
    MenuPrincipaleVUnComponent
  ]
})
export class AppModule { }
