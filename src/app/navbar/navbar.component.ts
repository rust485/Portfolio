import { Component, OnInit } from '@angular/core';

const links = ["Home", "Projects", "Contact"];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  inks = ['Home', 'Projects', 'Contacts'];
  constructor() { }

  ngOnInit()
  {

  }
}
