import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
declare var particlesJS: any;


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
    // particlesJS.load('app-particles', 'assets/particles.json', function() {
      // console.log('callback - app particles config loaded');
    // });
  }

}
