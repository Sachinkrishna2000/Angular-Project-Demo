import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ApplianceComponent } from './home-appliance/appliance/appliance.component';
import { HomeApplianceComponent } from './home-appliance/home-appliance.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './products/deals/deals.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { MusicComponent } from './sports/music/music.component';
import { SportsComponent } from './sports/sports.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:DealsComponent},
  {path:'contact',component:RegisterComponent},
  {path:'home_appliance',component:ApplianceComponent},
  {path:'sports',component:MusicComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'cartitems',component:CartItemsComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
