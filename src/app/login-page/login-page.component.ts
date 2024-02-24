import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroupDirective, NgForm} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,
    FormsModule,RouterModule,RouterOutlet,RegisterPageComponent,MatSidenav,MatSidenavModule,MatListModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
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


