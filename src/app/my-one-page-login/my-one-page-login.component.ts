import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-one-page-login',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-one-page-login.component.html',
  styleUrl: './my-one-page-login.component.css'
})
export class MyOnePageLoginComponent {

}
