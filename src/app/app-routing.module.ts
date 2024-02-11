import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { NavItemComponent } from './nav-item/nav-item.component';

const routes: Routes = [
  { path: 'accueil', component:  FooterComponent},
  { path: 'proprietaires', component:  NavbarComponent},
  { path: 'voyageurs', component:  NavHeadComponent},
  { path: 'devis', component:  FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
