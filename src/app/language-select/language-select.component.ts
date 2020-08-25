import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../translator.service';


@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {

  constructor(private translate: TranslatorService) { }

  ngOnInit(): void {
  }
  changeLang(lng:string) {
    this.translate.changeLanguage(lng);
  }

}
