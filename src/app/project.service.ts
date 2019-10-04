import { Injectable } from '@angular/core';
import { Project } from "./project";
import { Observable, of } from 'rxjs';

declare var TaskInfo: any;

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  project: Project;
  constructor() {
    this.project = TaskInfo.taskinfo();
    // console.log(this.project);
  }

  GetProject() {
    let promise = new Promise<Project>((resolve, reject) => {
      // console.log("GetProject: ", this.project);
      // console.log("GetProject.result: ", this.project.result);
      // console.log("GetProject.result.unknowns: ", this.project.result.unknowns);
      resolve(this.project);
    });

    return promise;
  }

  getProject(): Observable<Project> {
    return of(this.project);
  }
}
