import { Injectable }     from '@angular/core';

@Injectable()
export class ProjectService {

    public buildSelectList($el, data) {
        let options = '';
        let selected;
        for (let i = 0; i < data; ++i) {
            if (data[i]['id'] == data['client_id']) {
                options += `<option selected value='${data[i]['id']}'>${data[i]['first_name']} ${data[i]['last_name']}</option>`;
            } else {
                options += `<option value='${data[i]['id']}'>${data[i]['first_name']} ${data[i]['last_name']}</option>`;
            }
        }
        $el.html(options);
        $el.selectpicker({
            style: 'btn-default',
            size: 8
        });
    }
}