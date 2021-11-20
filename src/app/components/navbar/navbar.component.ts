import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public pages = [
    {
      name: 'home',
      active: true
    },
    {
      name: 'about us',
      active: false
    },
    {
      name: 'portfolio',
      active: false
    },
    {
      name: 'team',
      active: false
    },
    {
      name: 'contact us',
      active: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  activateClass(page: any) {
    this.pages.forEach(element => {
      element.active = false;
    });
    page.active = !page.active;
  }
}
