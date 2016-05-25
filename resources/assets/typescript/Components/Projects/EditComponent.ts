import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';

@Component({
    templateUrl: '/templates/projects.edit',
    providers: [ ProjectService ]
})
export class EditComponent implements OnInit {
    
    private project: Project;
    private isLoaded: boolean = false;
    
    constructor(private projectService: ProjectService) {}
    
    ngOnInit() {
        this.getProject();
    }
    
    public getProject() {
        this.projectService
            .getProject()
            .subscribe(
                project => {
                    this.project = project;
                    this.isLoaded = true;
                },
                error => this.errorMessage = <any>error
            );
    }
}