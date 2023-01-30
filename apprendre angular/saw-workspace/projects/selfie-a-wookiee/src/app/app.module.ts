import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './learning/mon-premier/mon-premier.component';
import { ListSelfiesComponent } from './features/selfies/list-selfies/list-selfies.component';
import { SelfiesModule } from './features/selfies/selfies.module';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    // ListSelfiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelfiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
