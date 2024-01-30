import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogCard } from '../my-one-page-main/BlogCard';

@Component({
  selector: 'app-my-one-page-blog-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-one-page-blog-page.component.html',
  styleUrl: './my-one-page-blog-page.component.css'
})
export class MyOnePageBlogPageComponent {

 
  
  blogCard:blogCard[]=[
    {id:1,  title:"Gaming", text:"Text-1", description:"Come and check out my gaming articles and my games!", picture:"https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg",date: String(new Date()),link:'blog',},
    {id:2, title:"Music", text:"Text-2", description:"Those who trust their music taste should come. You will not regret it.", picture:"https://cdn.pixabay.com/photo/2017/06/12/19/05/hard-rock-2396482_1280.jpg",date: String(new Date()),link:'blog',},
    {id:3, title:"Photography", text:"Text-3", description:"There is so much worth seeing. These photos will fascinate you!", picture:"https://cdn.pixabay.com/photo/2019/03/24/23/55/tokyo-4079046_1280.jpg",date: String(new Date()),link:'blog',},
  
  ];
cards: any;
temp: any;


}
