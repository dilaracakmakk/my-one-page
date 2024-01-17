import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import {MyOnePageMainComponent } from './my-one-page-main/my-one-page-main.component';
import { MyOnePageFooterComponent } from './my-one-page-footer/my-one-page-footer.component';
import { MyonepageProjectNameComponent } from './myonepage-project-name/myonepage-project-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,OnepageHeaderComponent,MyOnePageMainComponent,MyOnePageFooterComponent,MyonepageProjectNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="Dilara";
  surname="Çakmak";
  projectName='My One Page';
  title="my-one-page";
}
