import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent}            from './home/home.component';
import { ContactComponent }        from './contact/contact.component';
import { ProjectsComponent }       from './projects/projects.component';
import { ResumeComponent }         from './resume/resume.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: 'home',            component: HomeComponent },
  { path: 'contact',         component: ContactComponent },
  { path: 'projects/:id',    component: ProjectsComponent },
  { path: 'resume',          component: ResumeComponent },
  { path: 'work-experience', component: WorkExperienceComponent },

  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'projects', redirectTo: '/projects/0', pathMatch:'full'}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
