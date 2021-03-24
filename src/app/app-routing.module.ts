import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BazaarComponent } from '../app/components/bazaar/bazaar.component';
import { HomeComponent } from '../app/components/home/home.component';
import { RaregamesComponent } from '../app/components/raregames/raregames.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { ItemComponent } from './components/bazaar/item/item.component';
import { RaregameComponent } from './components/raregames/raregame/raregame.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bazaar', component: BazaarComponent, children: [
    { path: ':id', component: ItemComponent }
  ]},
  { path: 'raregames', component: RaregamesComponent, children: [
    { path: ':id', component: RaregameComponent }
  ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
