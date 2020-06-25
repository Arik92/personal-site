import { Directive, ElementRef } from '@angular/core';
import { TranslatorService } from './translator.service';

@Directive({selector: '[rtlDiv]'})
export class RTLDivDirective {
  isRTL: boolean;

  setDirection(element, isRTL): void {
    if (isRTL) {
      element.nativeElement.classList.add('rtl');
    }
  }

  constructor(
    private translator: TranslatorService,
    el: ElementRef
  ) {
      this.isRTL = translator.isRTL();
      this.setDirection(el, this.isRTL);
      // this.translator.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      //   this.setDirection(el, translator.isRTL());
      // });
    }
}
