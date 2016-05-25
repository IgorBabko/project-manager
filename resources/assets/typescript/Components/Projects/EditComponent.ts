import { Component } from '@angular/core';
import { Project } from '../../Services/ProjectService';

@Component({
    templateUrl: '/templates/projects.edit'
})
export class EditComponent OnInit {
    
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