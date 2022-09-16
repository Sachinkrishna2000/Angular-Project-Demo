import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { PopProductsComponent } from './pop-products/pop-products.component';
import { HomeApplianceComponent } from './home-appliance/home-appliance.component';
import { SportsComponent } from './sports/sports.component';
import { AllProductsComponent } from './all-products/all-products.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    UserComponent,
    PopProductsComponent,
    HomeApplianceComponent,
    SportsComponent,
    AllProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
