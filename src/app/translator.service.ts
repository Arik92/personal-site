import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  
  langChange$: Observable<any>;
  constructor(private translate: TranslateService) {
    this.langChange$ = this.translate.onLangChange;
   }
  
  // translation service example

  async init(lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.getDefaultLang();    
  }

  changeLanguage(lang) {
    // this.translate.setDefaultLang(lang);
    this.translate.use(lang);   
  }

  isRTL = () => {
    return this.translate.currentLang === 'iw';
  }

  selectedLang = () => {
    return this.translate.currentLang === 'iw' ? 'עב' : 'EN';
  }

  getTranslationLanguage = () => {
    return this.translate.currentLang === 'iw' ? 'iw' : 'en';
  }

  getTranslation(lang) {
    const res = this.translate.getTranslation(lang);
    return this.translate.getTranslation(lang);
  } 

}
