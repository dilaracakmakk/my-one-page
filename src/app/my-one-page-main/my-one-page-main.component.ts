import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogCard } from './BlogCard';
import { MyOnePageContent } from './my-one-page-content';

@Component({
  selector: 'app-my-one-page-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-one-page-main.component.html',
  styleUrl: './my-one-page-main.component.css'
})
export class MyOnePageMainComponent {
//field

MyOnePageContent:MyOnePageContent[]=[
  {id:1, title:"about"},
  {id:2, title:"blog"},
  {id:3, title:"contact"},
     

 
];



blogCard:blogCard[]=[
  {id:1, title:"Gaming", text:"Text-1", description:"Come and check out my gaming articles!", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:2, title:"Music", text:"Text-2", description:"Those who trust their taste in music should come...", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:3, title:"Photography", text:"Text-3", description:"There is so much worth seeing!", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  

];

//constructor


//method




}
