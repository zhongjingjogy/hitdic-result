import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { ASSETS_URL } from "../urls";

@Component({
  selector: 'app-convergence',
  templateUrl: './convergence.component.html',
  styleUrls: ['./convergence.component.css']
})
export class ConvergenceComponent implements OnInit {
  project: Project;
  couples_src: string[];

  constructor(public projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.GetProject().then(
      (project) => {
        this.project = project;
      }
    )
  }

  TableData() {
    return this.project.result.unknowns;
  }

  base = ASSETS_URL + "/.report/svg/";
}
