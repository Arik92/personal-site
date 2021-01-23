import { Component, Input, OnInit } from '@angular/core';
import { projectItem } from '../content.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @Input() project: projectItem;

  constructor() { }

  ngOnInit(): void {
  }

}
