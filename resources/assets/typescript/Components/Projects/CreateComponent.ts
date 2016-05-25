import { Component } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { Project } from '../../Models/ProjectModel';

@Component({
    templateUrl: '/templates/projects.create'
})
export class CreateComponent {
    
    private project: Project;
    
    constructor(private projectService: ProjectService) {}
    
    public postProject() {
        this.projectService
            .postProject(this.project)
            .subscribe(
                project => {
                    // this.project = project;
                    // this.isLoaded = true;
                    console.log(project);
                },
                error => this.errorMessage = <any>error
            );
    }
}