import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CategoryWomenComponent } from './category-women/category-women.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MennuComponent } from './mennu/mennu.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    ProductDescriptionComponent,
    CategoryWomenComponent,
    HomeComponent,
    SearchComponent,
    MennuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
