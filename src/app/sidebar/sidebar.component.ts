import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location }                                       from '@angular/common';
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

  constructor(
    private location: Location
  ) { }

  ngOnInit()
  {
    let tree = this.location.path().split('/');
    if (!this.updateSelectedByID(parseInt(tree[2])))
      this._selected = this.items[0];
  }

  updateSelectedByID(id: number) : boolean
  {
    console.log(id);
    if (id >= this.items.length) return false;
    this._selected = this.items[id];
    return true;
  }

  updateSelectedByObject(item: Object)
  {
    this.selected.emit(item);
    this._selected = item;
  }
}
