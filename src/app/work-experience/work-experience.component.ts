import { Component, OnInit } from '@angular/core';

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
    private jobService: JobService
  ) { }

  getJobs(): void
  {
    this.jobs = this.jobService.getJobs();
  }

  ngOnInit()
  {
    this.getJobs();
    this.currentJob = this.jobs[0];
  }
}
