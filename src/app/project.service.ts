import { Injectable }  from '@angular/core';
import { ProjectList } from '../assets/project-list';
import { Project }     from './models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[]
  {
    return ProjectList;
  }
}
