import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { Location }          from '@angular/common';

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

  constructor(
    private router: Router,
    private location: Location
  )
  {
    this.links = [new NavRoute('Home', '/home'),
                  new NavRoute('Projects', '/projects'),
                  new NavRoute('Work Experience', '/work-experience'),
                  new NavRoute('Resume', '/resume'),
                  new NavRoute('Contact', '/contact')];
  }

  changeTab(tab:string): boolean
  {
    // use this instead of js built-ins for performance purposes :)
    for (let i = 0; i < this.links.length; i++)
    {
      if (this.links[i].name === tab)
      {
        this.selected = this.links[i];
        return true;
      }
    }
    return false;
  }

  changeTabByURL(url:string): boolean
  {
    for (let i = 0; i < this.links.length; i++)
    {
      if (this.links[i].route === url)
      {
        this.selected = this.links[i];
        return true;
      }
    }
    return false;
  }

  getLinkRoute(link:string): string { return '/' + link.toLowerCase(); }

  ngOnInit()
  {
    let tree = this.location.path().split('/');
    if (!this.changeTabByURL('/' + tree[1]))
      this.selected = this.links[0];
  }
}
