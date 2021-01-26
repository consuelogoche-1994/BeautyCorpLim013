import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './mainViews/home/home.component';
import { OurCatalogsComponent } from './views/our-catalogs/our-catalogs.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ourCatalogs', component: OurCatalogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
