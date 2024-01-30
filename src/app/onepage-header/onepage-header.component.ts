import { Component } from '@angular/core';
import { SocialContent } from './SocialContent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onepage-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onepage-header.component.html',
  styleUrl: './onepage-header.component.css'
})
export class OnepageHeaderComponent {
header:string="SOCIAL" ;

socialContent:SocialContent[]=[
{id:1, link:"https://www.linkedin.com/in/dilara-%C3%A7akmak-172588237", text:"linkedin", icon:"fa-brands fa-linkedin", classSocial:"btn btn-info me-2"},
{id:1, link:"https://github.com/dilaracakmakk", text:"github", icon:"fa-brands fa-github", classSocial:"btn btn-info me-2"},
{id:1, link:"https://www.behance.net/dilaracakmak", text:"behance", icon:"fa-brands fa-square-behance", classSocial:"btn btn-info me-2"},
];


}
