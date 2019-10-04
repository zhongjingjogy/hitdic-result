import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { ASSETS_URL } from "../urls";

@Component({
  selector: 'app-fluxprofiles',
  templateUrl: './fluxprofiles.component.html',
  styleUrls: ['./fluxprofiles.component.css']
})
export class FluxprofilesComponent implements OnInit {
  project: Project;
  couples_src: string[];

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.GetProject().then(
      project => this.project = project);
    console.log(this.project.Result.Couples);
  }

  base = ASSETS_URL + "/.report/svg/";

}
