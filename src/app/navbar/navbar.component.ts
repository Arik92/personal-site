import { Component, OnInit } from '@angular/core';
interface navItem {
  title: string,
  route: string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  pages: navItem[]=[{
    title: 'Projects',
    route: 'projects'
  },
  {
    title: 'Pixel Art',
    route: '/'
  },
  {
    title: 'Games',
    route: '/'
  },
  {
    title: 'About',
    route: 'about'
  },
  {
    title: 'Contact',
    route: '/'
  }]; 

  constructor() { }

  ngOnInit(): void {
  }

  isDivider(index):boolean {
    return index !== (this.pages.length - 1)
  }

}
