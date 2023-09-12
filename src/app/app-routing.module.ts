import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',redirectTo:'signup',pathMatch:'full'
  },
  {
    path:"",component:ProductComponent
  },
  {
    path:"Product",component:ProductComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'check-out',component:CheckOutComponent
  },
  
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
