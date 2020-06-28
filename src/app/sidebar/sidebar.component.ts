import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../translator.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private translate: TranslatorService) { }

  ngOnInit(): void {
  }

  changeLang(lng:string) {
    this.translate.changeLanguage(lng);
  }

}
