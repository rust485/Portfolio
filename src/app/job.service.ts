import { Injectable } from '@angular/core';

import { Job }        from './models/Job';
import { JobList }    from '../assets/jobs-list';

@Injectable({
  providedIn: 'root'
})

export class JobService {

  jobs: Job[];
  constructor()
  {
    this.jobs = JobList;
  }

  getJobs(): Job[]
  {
    return this.jobs;
  }
}
