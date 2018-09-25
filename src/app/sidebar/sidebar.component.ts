import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  items: Object[];
  @Input()
  root: string;

  selected: Object;

  constructor() { }

  ngOnInit() { this.selected = this.items[0]; }

  getRoute(item: Object): string
  {
    return this.root + '/' + Object.name;
  }

  updateSelected(item: Object)
  {
    this.selected = item;
  }

}
