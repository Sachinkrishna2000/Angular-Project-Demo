import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { PopProductsComponent } from './pop-products/pop-products.component';
import { HomeApplianceComponent } from './home-appliance/home-appliance.component';
import { SportsComponent } from './sports/sports.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DealsComponent } from './products/deals/deals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ApplianceComponent } from './home-appliance/appliance/appliance.component';
import { MusicComponent } from './sports/music/music.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    ProductsComponent,
    AboutComponent,
    UserComponent,
    PopProductsComponent,
    HomeApplianceComponent,
    SportsComponent,
    AllProductsComponent,
    DealsComponent,
    CounterComponent,
    CounterchildComponent,
    AdvertisementComponent,
    ApplianceComponent,
    MusicComponent,
    RegisterComponent,
    ContactsComponent,
    ProductdetailsComponent,
    CartItemsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
