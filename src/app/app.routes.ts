import { Routes } from '@angular/router';
import { MyOnePageMainComponent } from './my-one-page-main/my-one-page-main.component';
import { MyOnePageBlogPageComponent } from './my-one-page-blog-page/my-one-page-blog-page.component';
import { MyOnePageLoginComponent } from './my-one-page-login/my-one-page-login.component';
import { MyOnePageRegisterComponent } from './my-one-page-register/my-one-page-register.component';

export const routes: Routes = [


    {path:'index', component:MyOnePageMainComponent},
    {path:'', redirectTo:"index", pathMatch:'full'},


    {path:'blog', component:MyOnePageBlogPageComponent},

    {path:"login", component:MyOnePageLoginComponent},

    {path:"register", component:MyOnePageRegisterComponent},




];
