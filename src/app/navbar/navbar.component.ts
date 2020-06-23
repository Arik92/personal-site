import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
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
    particlesJS.load('navbar-particles', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });    
  }

  isDivider(index:number):boolean {
    return index !== (this.pages.length - 1)
  }

}
