import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  links: string[];

  selected: string;

  constructor()
  {
    this.links = ['Home', 'Projects', 'Contacts'];
    this.selected = this.links[0];
  }

  changeTab(tab:string)
  {
    this.selected = tab;
  }

  ngOnInit()
  {

  }
}
