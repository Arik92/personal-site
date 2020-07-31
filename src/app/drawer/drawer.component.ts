import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService, navItem } from '../navigation.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {
  navPages: navItem[] = [];

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.navPages.subscribe(newPages => {
      this.navPages = newPages;
    });       
  }  

  ngOnDestroy(): void {
    this.navigation.navPages.unsubscribe();
  }

}
