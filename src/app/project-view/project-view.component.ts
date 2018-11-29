import { Component, OnInit, Input } from '@angular/core';
import { Project }                  from '../models/Project';
import { SDProject}                 from '../models/SDProject';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  @Input()
  project: Project;

  constructor()
  {
  }

  isSDProject(project)
  {
    return project.contrib !== undefined;
  }

  getImageSources() : Object[]
  {
    if (!this.project || !this.project.images) return [];
    var imageSources: Object[] = [];
    for (let i = 0; i < this.project.images.length; i++)
      imageSources.push({source: '../assets/' + this.project.images[i], caption: this.project.captions[i]});
    return imageSources;
  }

  ngOnInit()
  {

  }

}
