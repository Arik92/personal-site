import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: any[] = [  
];

  constructor(private content: ContentService) {
    this.projectList = this.content.getProjectTitles();
   }

  ngOnInit(): void {   
  }

}
