import { Component, OnInit } from '@angular/core';
import { TranslatorService } from './translator.service';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {  
  currentLanguage: string = 'en';
  constructor(private translator: TranslatorService) {
    // Optional: get currentLanguage from localstorage
    this.translator.init(this.currentLanguage);   
  }

  ngOnInit() {
    particlesJS.load('app-particles', 'assets/particles.json', function() {
      console.log('callback - app particles config loaded');
    });      
    
  }
  // changeLang(lng:string) {
  //   this.translator.changeLanguage(lng);
  // }

  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }
}
