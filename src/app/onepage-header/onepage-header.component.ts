import { Component } from '@angular/core';
import { SocialContent } from './SocialContent';
import { CommonModule } from '@angular/common';

@Component({
  //html
  selector: 'app-onepage-header',
  //component bağımsız çalışabilsin mi 
  standalone: true,
  //modül ekleme
  imports: [CommonModule],
  //html5 url
  templateUrl: './onepage-header.component.html',
  //css3 template
  styleUrl: './onepage-header.component.css'
})
export class OnepageHeaderComponent {
header:string="SOCIAL" ;

socialContent:SocialContent[]=[
{id:1, link:"https://link1", text:"linkedin", icon:"fa-brands fa-linkedin", classSocial:"btn btn-info me-2"},
{id:1, link:"https://link2", text:"github", icon:"fa-brands fa-github", classSocial:"btn btn-info me-2"},
{id:1, link:"https://link3", text:"behance", icon:"fa-brands fa-square-behance", classSocial:"btn btn-info me-2"},
];


}
