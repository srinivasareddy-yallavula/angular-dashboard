import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { LogoComponent } from './logo/logo.component';

export const routes: Routes = [
    {path:'', component:LoginPageComponent},
    {path:'register',component:RegisterPageComponent},
    {
        path:'dashboard',component:DashboardComponent
    },
    {path:'login',component:LoginPageComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'features',component:FeaturesComponent},
    {path:'logo', component:LogoComponent}

];
