import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslatorService } from '../translator.service';
import { NavigationService, navItem } from '../navigation.service';

@Component({
  selector: 'app-gaia-navbar',
  templateUrl: './gaia-navbar.component.html',
  styleUrls: ['./gaia-navbar.component.scss']
})
export class GaiaNavbarComponent implements OnInit, OnDestroy {
  dropdownFlag: boolean = false;
  navPages: navItem[] = [];

  constructor(private translate: TranslatorService, private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.navPages.subscribe(newPages => {
      this.navPages = newPages;
    });
  }

  changeLang(lng: string) {
    this.translate.changeLanguage(lng);
  }

  closeDropdown = () => {
    this.dropdownFlag = false;
    document.body.removeEventListener('click', this.closeDropdown, false);
  }

  toggleDropdown() {
    this.dropdownFlag = !this.dropdownFlag;
    if (this.dropdownFlag) {
      setTimeout(() => {
        document.body.addEventListener('click', this.closeDropdown, false);
      }, 370);
    } 
  }

  ngOnDestroy() {
    this.navigation.navPages.unsubscribe();
  }
}
