import { Injectable } from '@angular/core';
import { Project }    from '../Models/ProjectModel';

declare var jQuery: any;

@Injectable()
export class SelectListService {

    public buildSelectList($el, data, selectedItems = null, isMultiple = false):void {
        
        let options = '';
        let selected = '';
        
        if (!selectedItems) {
            for (let i = 0; i < data.length; ++i) {
                options += this.addOption(data[i]);
            }
        } else if (typeof selectedItems == 'object') {
            for (let i = 0; i < data.length; ++i) {
                selected = jQuery.inArray(data[i]['id'], selectedItems) !== -1 ? 'selected' : '';
                options += this.addOption(data[i], selected);
            }
        } else {  
            for (let i = 0; i < data.length; ++i) {
                selected = data[i]['id'] == selectedItems ? 'selected' : '';
                options += this.addOption(data[i], selected);
            }
        }
        
        this.initialize($el, options, isMultiple);
    }
    
    private addOption(data, selected = ''):string {
        if (data['name']) {
            return `<option ${selected} value='${data['id']}'>${data['name']}</option>`;            
        } else {
            return `<option ${selected} value='${data['id']}'>${data['first_name']} ${data['last_name']}</option>`;            
        }
    }
    
    private initialize($el, options, isMultiple = false):void {
        $el.html(options);
        
        if (isMultiple) {
            $el.multipleSelect();
        }
    }
    
}