export enum userRolles{
    admin='ADMIN',
    writer='WRITER',
    user='USER',
}

abstract class Person{
    id:number;
    username:string;
    password:string;
    email:string;
    pictures:string;
    date:string;
    link:string;

    constructor(
        id:number,
        username:string,
        password:string,
        email:string,
        pictures:string,
        date:string,
        link:string
    ){
        this.id=id;
        this.username=username;
        this.password=password;
        this.email=email;
        this.pictures=pictures;
        this.date=date;
        this.link=link;

    }

    // personInformation():void{
    //     console.log("Gövdeli Method");
    // }


}


export class User extends Person {
  
    // rolles:Array<any>;
    rolles:string;

    constructor(
        id:number,
        username:string,
        password:string,
        email:string,
        pictures:string,
        date:string,
        link:string,
        rolles:string
        ){
           super(id,username,email,password,pictures,date,link);
            this.rolles=rolles;

        }
    }
    


