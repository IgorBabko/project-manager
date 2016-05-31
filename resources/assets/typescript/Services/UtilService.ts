import { Injectable }     from '@angular/core';

declare var jQuery: any;

@Injectable()
export class UtilService {

    public buildSelectList($el, data, selectedItems = null):void {
        let selectOptions = '';
        let selected = '';
        
        if (!selectedItems) {
            
            for (let i = 0; i < data.length; ++i) {
                selectOptions += this.addOption(data[i]);
            }
            
            
        } else if (typeof selectedItems == 'object') {
            
            for (let i = 0; i < data.length; ++i) {
                selected = jQuery.inArray(data[i]['id'], selectedItems) !== -1 ? 'selected' : '';
                selectOptions += this.addOption(data[i], selected);
            }
            
        } else {
            
            for (let i = 0; i < data.length; ++i) {
                selected = data[i]['id'] == selectedItems ? 'selected' : '';
                    selectOptions += this.addOption(data[i], selected);
            }
            
        }
        
        this.initializeBootstrapSelect($el, selectOptions);
    }
    
    private addOption(data, selected = ''):string {
        return `<option ${selected} value='${data['id']}'>${data['first_name']} ${data['last_name']}</option>`;
    }
    
    private initializeBootstrapSelect($el, selectOptions):void {
        $el.html(selectOptions);
        $el.selectpicker({
            style: 'btn-default',
            size: 8
        });
    }
}