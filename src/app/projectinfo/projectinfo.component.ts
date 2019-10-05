import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Project } from "../project";

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.css']
})
export class ProjectinfoComponent implements OnInit {

  project: Project;
  constructor(public projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.GetProject().then(
      project => this.project = project);
  }
  image = "";
}
