import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {CurrencyPipe} from '@angular/common';




interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatTableModule,MatListModule,CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
}
