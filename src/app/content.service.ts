import { Injectable } from '@angular/core';
import * as projectInfo from '../assets/project_info.json';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  projectList: any[] = [];
  
  constructor() {
    this.projectList = projectInfo.projects;
   }
  
  getProject(title:string) {
    const foundProject = this.projectList.filter(project => project.title.localeCompare(title) === 0);
    return foundProject[0];
  }

  getProjectTitles() {
    return this.projectList.map(project => {
      return {
        title: project.title
      }
    });
  }

}
