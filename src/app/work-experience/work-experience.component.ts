import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { ActivatedRoute }    from '@angular/router';

import { Job }               from '../models/Job';
import { JobService }        from '../job.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  jobs: Job[];
  currentJob: Job;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getJobs(): void
  {
    this.jobs = this.jobService.getJobs();
  }

  ngOnInit()
  {
    this.getJobs();
    this.currentJob = this.jobs[0];

    this.route.params.subscribe(params =>
    {
      if (this.currentJob.id != params['id'])
        this.setSelectedByID(params['id']);
    });
  }

  getJobByID(id: number): Job
  {
    for (let i = 0; i < this.jobs.length; i++)
      if (this.jobs[i].id === id)
        return this.jobs[i];

    return null;
  }

  onSelected(selected: Job): void
  {
    this.setSelectedByID(selected.id);
  }

  setSelected(job: Job)
  {
    this.currentJob = job;
    this.location.go('/work-experience/' + job.id);
  }

  setSelectedByID(id: number): void
  {
    let job: Job = this.getJobByID(id);
    this.setSelected(job);
  }
}
