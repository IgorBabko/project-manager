import { Location } from '@angular/common'

export class BaseComponent {
    
    private location: Location;
    
    constructor(location: Location) {
        this.location = location;
    }
    
    public isURL(path: string):boolean {
        let pathRegExp = new RegExp(path);
        console.log(pathRegExp);
        return pathRegExp.test(this.location.path());
    }
}