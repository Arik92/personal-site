import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService, navItem } from '../navigation.service';
declare var particlesJS: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {
  navPages: navItem[] = [];

  constructor(private navigation: NavigationService) {    
   }

  ngOnInit(): void {
    particlesJS.load('navbar-particles', 'assets/particles.json', function() {
      // console.log('callback - particles.js config loaded');      
    });    
    this.navigation.navPages.subscribe(newPages => {
      this.navPages = newPages;
    })
  }

  isDivider(index:number):boolean {
    return index !== (this.navPages.length - 1)
  }
  toggleBurger() {
    this.navigation.toggleDrawerState();
  }

  ngOnDestroy() {
    this.navigation.navPages.unsubscribe();
  }
}
