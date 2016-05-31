import { Injectable }     from '@angular/core';

declare var jQuery: any;

@Injectable()
export class UtilService {

    public buildSelectList($el, data, selectedItems = null) {
        let options = '';
        if (selectedItems) {
            let selected;
            for (let i = 0; i < data.length; ++i) {
                selected = '';
                if (jQuery.inArray(data[i]['id'], selectedItems) !== -1) {
                    selected = 'selected';
                }
                options += `<option ${selected} value='${data[i]['id']}'>${data[i]['first_name']} ${data[i]['last_name']}</option>`;
            }
        } else {
            for (let i = 0; i < data; ++i) {
                if (data[i]['id'] == data['client_id']) {
                    options += `<option selected value='${data[i]['id']}'>${data[i]['first_name']} ${data[i]['last_name']}</option>`;
                } else {
                    options += `<option value='${data[i]['id']}'>${data[i]['first_name']} ${data[i]['last_name']}</option>`;
                }
            }
        }
        
        $el.html(options);
        $el.selectpicker({
            style: 'btn-default',
            size: 8
        });
    }
}