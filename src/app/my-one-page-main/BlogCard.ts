//blog card

export class blogCard{
   //field
    id:number;
    title:string;
    text:string;
    description:string;
    picture:string;
    date:string;
    link:string;

    //constructor
constructor(id:number,title:string, text:string, description:string,picture:string,date:string,link:string){
this.id=id;
this.title=title;
this.text=text;
this.description=description;
this.picture=picture;
this.date=date;
this.link=link;
    }
}