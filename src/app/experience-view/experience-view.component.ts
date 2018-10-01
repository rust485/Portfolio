import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Job } from '../models/Job';

const monthNames = [
  "Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

@Component({
  selector: 'app-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrls: ['./experience-view.component.css']
})
export class ExperienceViewComponent implements OnInit {



  @Input()
  selected: Job;

  constructor() { }

  getDate(date: Date): string
  {
    return monthNames[date.getMonth()] + " " + date.getFullYear();
  }

  getDateInterval(job: Job): string
  {
    return this.getDate(job.from) + " - " + this.getDate(job.to);
  }

  ngOnInit() {
  }

}
