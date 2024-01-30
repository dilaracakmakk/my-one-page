import { Component } from '@angular/core';

@Component({
  selector: 'app-my-one-page-footer',
  standalone: true,
  imports: [],
  templateUrl: './my-one-page-footer.component.html',
  styleUrl: './my-one-page-footer.component.css'
})
export class MyOnePageFooterComponent {

constructor(){
  console.log('One Page Footer Component');
}


newDateData():string{
return String (new Date().getFullYear());
}



}
