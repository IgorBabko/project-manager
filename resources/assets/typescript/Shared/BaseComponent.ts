import { Location } from '@angular/common'

export class BaseComponent {
    
    private location: Location;
    
    constructor(location: Location) {
        this.location = location;
    }
    
    public getUrl() {
        return this.location.path();
    }
    
    public isURL(path: string):boolean {
        return this.location.path() == path;
    }
}