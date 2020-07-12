import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: any[] = [
    {
    title: 'Emunah'
  },
  {
    title: 'DankTickets'
  },
  {
    title: 'RunTimes'
  },
];

  constructor() { }

  ngOnInit(): void {   
  }

}
