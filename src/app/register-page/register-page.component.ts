import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginPageComponent, MyErrorStateMatcher } from '../login-page/login-page.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,
    FormsModule,LoginPageComponent,MatSidenav,MatSidenavModule,MatListModule,RouterModule,RouterOutlet],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher1 = new MyErrorStateMatcher();
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
