import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private translate: TranslateService) { }
  // translation service example

  async init(lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.getDefaultLang();
    // this.translate.onLangChange.subscribe(newLang => {
    //   console.log('language change hook ', newLang);
    // })
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
    return this.translate.getTranslation(lang);
  } 

}
