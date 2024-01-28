export enum userRolles{
    admin='ADMIN',
    writer='WRITER',
    user='USER',
}

export interface IUser{
    name:string;
    surname:string;  
    username:string;
    email:string;
    password:string;
    

}

abstract class Person implements IUser{
    id:number;
    pictures:string;
    date:string;
    link:string;

  
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;

    constructor(
        id:number,
        name: string,
        surname: string,
        username: string,
        password: string,
        email: string,
        pictures:string,
        date:string,
        link:string
    ){
        this.id=id;
        this.name=name;
        this.username=username;
        this.surname=surname;
        this.password=password;
        this.email=email;
        this.pictures=pictures;
        this.date=date;
        this.link=link;

    }
}
export class User extends Person {
    
    rolles:string;

    constructor(
        id:number,
        name:string,
        surname:string,
        username:string,
        password:string,
        email:string,
        pictures:string,
        date:string,
        link:string,
        rolles:string
        ){
           super(id,name,surname,username,email,password,pictures,date,link);
            this.rolles=rolles;

        }
    }
    


