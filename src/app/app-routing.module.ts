import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './auth/create/create.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'register',
      component: CreateComponent
    },
    {
    path: 'login',
    component: LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
