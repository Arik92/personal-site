import { Component, OnInit } from '@angular/core';
import { TranslatorService } from './translator.service';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  constructor(private translator: TranslatorService) {
    this.translator.init('iw');
  }

  ngOnInit() {
    particlesJS.load('app-particles', 'assets/particles.json', function() {
      console.log('callback - app particles config loaded');
    });  
  }

  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }
}
