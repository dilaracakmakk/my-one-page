import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-myonepage-project-name',
  standalone: true,
  imports: [
    CommonModule,
  ],
  //templateUrl: './myonepage-header.component.html'
  template: `<div>
  Project Name: <span class="text-primary">My One Page</span>  
  <br>
  Merhabalar :) <span class="text-primary">Dilara - Çakmak</span>  </div>
<hr/>`,
  styleUrl: './myonepage-project-name.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyonepageProjectNameComponent { 
  name:string='dilara';
  surname:string='çakmak';
  projectName:string='My One Page';
  projectVersion:string='v1.0.0';
  projectDescription:string='My One Page Project';
  projectAuthor:string='Dilara Çakmak';
  projectLicence:string='MIT';
  projectRepository:string='';
  projectKeywords:string='';
  projectYear:string='2024';
}
