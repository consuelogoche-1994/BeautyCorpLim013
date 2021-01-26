import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './mainViews/home/home.component';
import { EsikaComponent } from './mainViews/esika/esika.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemBrandComponent } from './components/item-brand/item-brand.component';
import { AboutAsComponent } from './views/about-as/about-as.component';
import { OurCatalogsComponent } from './views/our-catalogs/our-catalogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EsikaComponent,
    FooterComponent,
    ItemBrandComponent,
    AboutAsComponent,
    OurCatalogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
