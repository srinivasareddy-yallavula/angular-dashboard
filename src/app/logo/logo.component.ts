import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [DashboardComponent,MatIconModule,AboutUsComponent,ContactUsComponent,
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatTableModule,MatListModule,CurrencyPipe,RouterModule,RouterOutlet,LoginPageComponent,AboutUsComponent,FeaturesComponent
  ,FeaturesComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
