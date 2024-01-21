import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, userRolles } from './User';

@Component({
  selector: 'app-my-one-page-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-one-page-navbar.component.html',
  styleUrl: './my-one-page-navbar.component.css'
})
export class MyOnePageNavbarComponent {
  homePage:String ='Ana Sayfa44';

username:String="Dilara Çakmak";


// id:number;
// username:string;
// email:string;
// pictures:string;
// date:string;
// link:string;

User: User[]=[
  {
    id:1, 
    username:'Dilara Çakmak',
    password:'123456',
    email:'dilaraaacakmakk@gmail.com',
    pictures:'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg',
    date:String(new Date().getFullYear()),
    link:'https://admin1/',
    rolles:userRolles.admin,

 
  },
  {
    id:2, 
    username:'writer1',
    password:'123456',
    email:'writer1@gmail.com',
    pictures:'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg',
    date:String(new Date().getFullYear()),
    link:'https://writer1/',
    rolles:userRolles.writer,
  },
  {
    id:3, 
    username:'user1',
    password:'123456',
    email:'user1@gmail.com',
    pictures:'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg',
    date:String(new Date().getFullYear()),
    link:'https://user1/',
    rolles:userRolles.user,
    
  }
];


  navBar:{
    isLogin:boolean,
  
    logo:{
     logoName:string;
     logoFontAwesome:string;
     logoPicture:string;
     logoLink:string;
     logoTitle:string;
    };
  
    navbar:Array<any>;
    search:{};
  }={
  
    isLogin:true,
    logo:{
    logoName:'Logo',
    logoFontAwesome:'fa-regular fa-heart',
    logoPicture:'https://pixabay.com/tr/illustrations/kakt%C3%BCs-sulu-model-bah%C3%A7e-bahar-8250996/',
    logoLink:'/',
    logoTitle:'Title',
  },
  
    navbar:[
      {id:1,name:"Anasayfa",link:"/anasayfa",fontAwesome:"fa-solid fa-house-chimney"},
      {id:1,name:"AboutMe",link:"/about-me",fontAwesome:"font-2"},
      {id:1,name:"Blog",link:"/blog",fontAwesome:"font-3"},
      {id:1,name:"Contact",link:"/contact",fontAwesome:"font-4"},
    ],
    search:{
      name:"Search",
      placeholder:"Search",
      type:"text",
    }
  }; 
}
