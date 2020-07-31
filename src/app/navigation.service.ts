import { Injectable } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TranslatorService } from './translator.service';

export interface navItem {
  key: string, // translation file key
  title: string,
  route: string
}
@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  drawerToggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  navPages: BehaviorSubject<navItem[]> = new BehaviorSubject<navItem[]>([{
    key: 'PROJECTS',
    title: '',
    route: 'projects'
  },
  {
    key: 'PIXEL_ART',
    title: '',
    route: '/'
  },
  {
    key: 'GAMES',
    title: '',
    route: '/'
  },
  {
    key: 'ABOUT',
    title: '',
    route: 'about'
  },
  {
    key: 'CONTACT',
    title: '',
    route: '/'
  }]);

  constructor(private translator: TranslatorService, private router: Router) {
    this.drawerToggle.next(this.drawerToggle.value);
    this.translator.langChange$.subscribe(languageObj => {
      const translationObj = languageObj.translations.NAVBAR;      
      const newPages = this.updateNavPages(translationObj);
      this.navPages.next(newPages);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.drawerToggle.next(false);
        }
      })
    });
   }

   updateNavPages(translations): navItem[] {
     const navPagesCopy = this.navPages.value;
     navPagesCopy.map(navItem => {
      navItem.title = translations[navItem.key];
    });

    return navPagesCopy;
   }

  toggleDrawerState(): void {    
    this.drawerToggle.next(!this.drawerToggle.value);
  }
}
