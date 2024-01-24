import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-one-page-register',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-one-page-register.component.html',
  styleUrl: './my-one-page-register.component.css'
})
export class MyOnePageRegisterComponent {

}
