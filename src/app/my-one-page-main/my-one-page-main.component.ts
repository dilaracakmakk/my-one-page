import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogCard } from './BlogCard';
import { MyOnePageContent } from './my-one-page-content';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-one-page-main',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-one-page-main.component.html',
  styleUrl: './my-one-page-main.component.css'
})
export class MyOnePageMainComponent {
//field

MyOnePageContent:MyOnePageContent[]=[
  {id:1, title:"my work"},
  {id:2, title:"about"},
  {id:3, title:"blog"},
  {id:4, title:"contact"},
     

 
];



blogCard:blogCard[]=[
  {id:1, title:"Gaming", text:"Text-1", description:"Come and check out my gaming articles!", picture:"https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:2, title:"Music", text:"Text-2", description:"Those who trust their taste in music should come...", picture:"https://cdn.pixabay.com/photo/2021/09/03/08/00/cd-6595247_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:3, title:"Photography", text:"Text-3", description:"There is so much worth seeing!", picture:"https://cdn.pixabay.com/photo/2019/03/24/23/55/tokyo-4079046_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  // https://i.pinimg.com/564x/ba/75/43/ba7543d82821a3ba6c587e9c7491e6b2.jpg

];

//constructor


//method




}
