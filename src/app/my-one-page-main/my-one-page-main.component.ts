import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogCard } from './BlogCard';

@Component({
  selector: 'app-my-one-page-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-one-page-main.component.html',
  styleUrl: './my-one-page-main.component.css'
})
export class MyOnePageMainComponent {
//field

blogCard:blogCard[]=[
  {id:1, title:"Title-1", text:"Text-1", description:"Description-1", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:2, title:"Title-2", text:"Text-2", description:"Description-2", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:3, title:"Title-3", text:"Text-3", description:"Description-3", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:4, title:"Title-4", text:"Text-4", description:"Description-4", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:5, title:"Title-5", text:"Text-5", description:"Description-5", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},
  {id:6, title:"Title-6", text:"Text-6", description:"Description-6", picture:"https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg",date: String(new Date().getFullYear()),link:'https://deneme/',},

];

//constructor


//method




}
