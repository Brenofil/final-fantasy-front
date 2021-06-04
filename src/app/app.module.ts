import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

import { BazaarComponent } from "./pages/bazaar/bazaar.component";
import { ItemComponent } from "./pages/bazaar/item/item.component";

import { RaregamesComponent } from "./pages/raregames/raregames.component";
import { RaregameComponent } from "./pages/raregames/raregame/raregame.component";

// ngx module
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxDatatableModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BazaarComponent,
    ItemComponent,
    RaregamesComponent,
    RaregameComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
