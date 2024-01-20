import { Component } from '@angular/core';

@Component({
  selector: 'app-my-one-page-navbar',
  standalone: true,
  imports: [],
  templateUrl: './my-one-page-navbar.component.html',
  styleUrl: './my-one-page-navbar.component.css'
})
export class MyOnePageNavbarComponent {
  homePage:String ='Ana Sayfa44';
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
