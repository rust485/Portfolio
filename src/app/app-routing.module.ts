import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent}         from './home/home.component';
import { ContactComponent }     from './contact/contact.component';
import { ProjectsComponent }    from './projects/projects.component';
import { ResumeComponent }      from './resume/resume.component';


const routes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume',   component: ResumeComponent },

  { path: '', redirectTo: '/home', pathMatch:'full'}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
