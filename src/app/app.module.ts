import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { BazaarComponent } from '../app/components/bazaar/bazaar.component';
import { RaregamesComponent } from '../app/components/raregames/raregames.component';
import { ItemComponent } from '../app/components/bazaar/item/item.component';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RaregameComponent } from './components/raregames/raregame/raregame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BazaarComponent,
    RaregamesComponent,
    ItemComponent,
    HomeComponent,
    NotFoundComponent,
    RaregameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
