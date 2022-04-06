import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryWomenComponent } from './category-women/category-women.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MennuComponent } from './mennu/mennu.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'category',component:CategoryWomenComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'product',component:ProductDescriptionComponent},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'mennu',component:MennuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
