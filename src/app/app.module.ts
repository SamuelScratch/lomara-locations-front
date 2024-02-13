import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavHeadComponent } from './nav-head/nav-head.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { VoyageursComponent } from './voyageurs/voyageurs.component';
import { BienCarteComponent } from './bien-carte/bien-carte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavHeadComponent,
    FooterComponent,
    AccueilComponent,
    ProprietairesComponent,
    VoyageursComponent,
    BienCarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
