import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mainViews/home/home.component';
import { AboutAsComponent } from './views/about-as/about-as.component';
import { OurCatalogsComponent } from './views/our-catalogs/our-catalogs.component';

const routes: Routes = [
  {path:'', component: AboutAsComponent},
  {path:'home', component: AboutAsComponent},
  {path:'ourCatalogs', component: OurCatalogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
