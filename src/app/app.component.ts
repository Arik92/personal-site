import { Component, OnInit } from '@angular/core';
import { TranslatorService } from './translator.service';
import { NavigationService } from './navigation.service';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {  
  currentLanguage: string = 'en';
  constructor(private translator: TranslatorService, private navigation: NavigationService) {
    // Optional: get currentLanguage from localstorage
    this.translator.init(this.currentLanguage).then(res => {
      //translate service initiated
      this.navigation.drawerToggle.subscribe(newDrawerState => {
        console.log('new drawer state val? ', newDrawerState);
      })
    });  
  }

  ngOnInit() {
    particlesJS.load('app-particles', 'assets/particles.json', function() {
      console.log('callback - app particles config loaded');
    });          
  }  
}
