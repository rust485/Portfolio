import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectList } from '../../assets/project-list';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];
  selected: Project;

  constructor()
  {
    this.projects = ProjectList;
    this.selected = this.projects[0];
  }

  ngOnInit() {
  }
}
