import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, userRolles } from './User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-one-page-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-one-page-navbar.component.html',
  styleUrl: './my-one-page-navbar.component.css'
})
export class MyOnePageNavbarComponent {
  // homePage:String ='Ana Sayfa';

// username:String="Dilara Çakmak";



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
    // search:{};
  }={
  
    isLogin:true,
    logo:{
    logoName:'Logo',
    logoFontAwesome:'',
    logoPicture:'https://cdn.pixabay.com/photo/2017/05/03/23/04/plasma-ball-2282449_1280.jpg',
    logoLink:'/',
    logoTitle:'Title',
  },
  
    navbar:[
      {id:1,name:"Anasayfa",link:"/anasayfa",fontAwesome:"font-1"},
      {id:2,name:"My Work",link:"#business_id",fontAwesome:"font-1"},
      {id:3,name:"AboutMe",link:"#about_me_id",fontAwesome:"font-2"},
      {id:4,name:"Blog",link:"#blog_id",fontAwesome:"font-3"},
    ],
    // search:{
    //   name:"Search",
    //   placeholder:"Search",
    //   type:"text",
    // }
  }; 

  constructor(){}


}
