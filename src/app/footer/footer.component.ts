import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService, navItem } from '../navigation.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  siteMap: navItem[] = [];
  

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.navPages.subscribe(newPages => {
      this.siteMap = newPages;
    });
  }

  ngOnDestroy(){
    this.navigation.navPages.unsubscribe();
  }

}
