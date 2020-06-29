import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../translator.service';
declare var particlesJS: any;
interface navItem {
  key: string, //translation file key
  title: string,
  route: string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  navPages: navItem[]=[{
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
  }]; 

  constructor(private translator:TranslatorService) {
    this.translator.langChange$.subscribe(languageObj => {
      const translationObj = languageObj.translations;
      this.navPages.map(navItem => {
        navItem.title = translationObj.NAVBAR[navItem.key];
      });
    });

   }

  ngOnInit(): void {
    particlesJS.load('navbar-particles', 'assets/particles.json', function() {
      // console.log('callback - particles.js config loaded');      
    });    
  }

  isDivider(index:number):boolean {
    return index !== (this.navPages.length - 1)
  }
}
