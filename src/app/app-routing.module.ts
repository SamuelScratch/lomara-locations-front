import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { VoyageursComponent } from './voyageurs/voyageurs.component';
import { DevisComponent } from './devis/devis.component';

const routes: Routes = [
  { path: 'proprietaires', component:  ProprietairesComponent},
  { path: 'voyageurs', component:  VoyageursComponent},
  { path: 'contact', component:  DevisComponent},
  { path: 'accueil', component:  AccueilComponent},
  { path: '**', redirectTo: 'accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
