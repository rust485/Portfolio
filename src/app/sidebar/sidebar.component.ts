import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  items: Object[];

  @Output() selected = new EventEmitter<Object>();
  _selected: Object;

  constructor() { }

  ngOnInit() { this._selected = this.items[0]; }

  updateSelected(item: Object)
  {
    this.selected.emit(item);
    this._selected = item;
  }
}
