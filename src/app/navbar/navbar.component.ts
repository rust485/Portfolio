import { Component, OnInit } from '@angular/core';

class NavRoute
{
  name:  string;
  route: string;
  constructor(name: string, route:string)
  {
    this.name = name;
    this.route = route;
  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  links: NavRoute[];

  selected: NavRoute;

  constructor()
  {
    this.links = [new NavRoute('Home', '/home'),
                  new NavRoute('Projects', '/projects'),
                  new NavRoute('Contact', '/contact'),
                  new NavRoute('Resume', '/resume')];
    this.selected = this.links[0];
  }

  changeTab(tab:string): void
  {
    // use this instead of js built-ins for performance purposes :)
    for (let i = 0; i < this.links.length; i++)
    {
      if (this.links[i].name === tab)
      {
        this.selected = this.links[i];
        return;
      }
    }
  }

  getLinkRoute(link:string): string { return '/' + link.toLowerCase(); }

  ngOnInit()
  {

  }
}
