import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

import { Project } from '../models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  currentProject: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  getProjects(): void
  {
    this.projects = this.projectService.getProjects();
  }

  getProjectByID(id: number): Project
  {
    for (let i = 0; i < this.projects.length; i++)
    {
      if (this.projects[i].id == id)
        return this.projects[i];
    }
    return null;
  }

  ngOnInit()
  {
    this.getProjects();
    this.currentProject = this.projects[0];

    this.route.params.subscribe(params =>
    {
      if (this.currentProject.id != params['id'])
        this.setSelectedByID(params['id']);
    });
  }

  onSelected(selected: Project): void
  {
    this.setSelectedByID(selected.id);
  }

  setSelectedByID(id: number): void
  {
    // project dne is handled by project-view
    let project: Project = this.getProjectByID(id);
    this.setSelected(project);
  }

  setSelected(project: Project): void
  {
    this.currentProject = project;
    this.location.go('/projects/' + project.id);
  }
}
