import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() items: Object[];
  @Input() rootroute: string;
  selected: Object;

  constructor()
  {
    this.selected = this.items[0];
  }

  ngOnInit() {
  }

  getRoute(item: Object): string
  {
    return this.rootroute + '/' + Object.name;
  }

  updateSelected(item: Object)
  {
    this.selected = item;
  }

}
