import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaia-navbar',
  templateUrl: './gaia-navbar.component.html',
  styleUrls: ['./gaia-navbar.component.scss']
})
export class GaiaNavbarComponent implements OnInit {
  dropdownFlag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeDropdown = () => {
    console.log('outsdie click registered');
    this.dropdownFlag = false;
    document.body.removeEventListener('click', this.closeDropdown, false);
  }
  toggleDropdown() {
    console.log('toggling dropdown to ', !this.dropdownFlag);
    this.dropdownFlag = !this.dropdownFlag;
    if (this.dropdownFlag) {
      setTimeout(() => {
        document.body.addEventListener('click', this.closeDropdown, false);
      }, 370);
    } 
  }
}
