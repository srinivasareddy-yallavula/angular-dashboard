import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FeaturesComponent } from '../features/features.component';
import { LogoComponent } from '../logo/logo.component';

interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [DashboardComponent,MatIconModule,AboutUsComponent,ContactUsComponent,FeaturesComponent,LogoComponent,
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatTableModule,MatListModule,CurrencyPipe,RouterModule,RouterOutlet,LoginPageComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})

export class AboutUsComponent {
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
