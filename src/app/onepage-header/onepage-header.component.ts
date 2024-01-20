import { Component } from '@angular/core';

@Component({
  //html
  selector: 'app-onepage-header',
  //component bağımsız çalışabilsin mi 
  standalone: true,
  //modül ekleme
  imports: [],
  //html5 url
  templateUrl: './onepage-header.component.html',
  //css3 template
  styleUrl: './onepage-header.component.css'
})
export class OnepageHeaderComponent {
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
  logoPicture:'image.png',
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
