import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { NonAuthGuard } from './auth/non-auth-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'login',
    canActivate: [NonAuthGuard],
    loadChildren: './auth/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'contacts',
    canActivate: [AuthGuard],
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
    path: 'todos',
    canActivate: [AuthGuard],
    loadChildren: './todos/todos.module#TodosModule'
  },
  {
    path: 'movies',
    canActivate: [AuthGuard],
    loadChildren: './movies/movies.module#MoviesModule'
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: './cart/cart.module#CartModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
