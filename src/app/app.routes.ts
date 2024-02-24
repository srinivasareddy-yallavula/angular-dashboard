import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
    {path:'', component:LoginPageComponent},
    {path:'Register',component:RegisterPageComponent},
    {
        path:'Dashboard',component:DashboardComponent
    },

];
