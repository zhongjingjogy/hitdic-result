import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { ASSETS_URL } from "../urls";

@Component({
  selector: 'app-interdprofiles',
  templateUrl: './interdprofiles.component.html',
  styleUrls: ['./interdprofiles.component.css']
})
export class InterdprofilesComponent implements OnInit {
  project: Project;
  couples_src: string[];

  constructor(public projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.GetProject().then(
      project => {
        console.log("composition profiles: ", this.project);
        this.project = project;
      }
    );
  }

  base = ASSETS_URL + "/svg/";
  image = "";
}
