import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeApplianceComponent } from './home-appliance/home-appliance.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'contact',component:ContactComponent},
  {path:'home_appliance',component:HomeApplianceComponent},
  {path:'sports',component:SportsComponent},
  {path:'allproducts',component:AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
