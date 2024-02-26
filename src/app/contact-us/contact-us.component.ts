import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FeaturesComponent } from '../features/features.component';
import { LogoComponent } from '../logo/logo.component';

interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [DashboardComponent,MatIconModule,AboutUsComponent,LogoComponent,
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatTableModule,MatListModule,CurrencyPipe,RouterModule,RouterOutlet,LoginPageComponent,AboutUsComponent,FeaturesComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  menuVisible = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
