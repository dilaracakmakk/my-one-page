import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-one-page-blog-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-one-page-blog-page.component.html',
  styleUrl: './my-one-page-blog-page.component.css'
})
export class MyOnePageBlogPageComponent {

}
