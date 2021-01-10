import { Injectable } from '@angular/core';
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
  navPages: BehaviorSubject<navItem[]> = new BehaviorSubject<navItem[]>([{
    key: 'PROJECTS',
    title: '',
    route: 'projects'
  },  
  {
    key: 'ABOUT',
    title: '',
    route: 'about'
  },
  {
    key: 'CONTACT',
    title: '',
    route: 'contact'
  }]);

  constructor(private translator: TranslatorService) {
    this.translator.langChange$.subscribe(languageObj => {
      const translationObj = languageObj.translations.NAVBAR;      
      const newPages = this.updateNavPages(translationObj);
      this.navPages.next(newPages);      
    });
   }

   updateNavPages(translations: JSON): navItem[] {
     const navPagesCopy = this.navPages.value;
     navPagesCopy.map(navItem => {
      navItem.title = translations[navItem.key];
    });

    return navPagesCopy;
   }  
}
