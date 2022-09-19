import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';

import { ApplianceComponent } from './home-appliance/appliance/appliance.component';
import { HomeApplianceComponent } from './home-appliance/home-appliance.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './products/deals/deals.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { MusicComponent } from './sports/music/music.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:DealsComponent},
  {path:'contact',component:RegisterComponent},
  {path:'home_appliance',component:ApplianceComponent},
  {path:'sports',component:MusicComponent},
  {path:'allproducts',component:AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
