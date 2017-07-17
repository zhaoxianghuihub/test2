import { Component, OnInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';

@Component({
    moduleId: module.id,
    selector: 'view-cmp',
    templateUrl: 'view.component.html'
})

export class ViewComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;

    ngOnInit(){
        this.tableData1 = {
            headerRow: [ '应用系统名称', '应用集成系统'],
            dataRows: [
                ['应用系统名称', '应用集成系统', 'Oud-Turnhout', '$36,738'],
                ['申请单位/部门', '全国公共文化发展中心', 'Sinaai-Waas', '$23,789'],
                ['联系人姓名', '全国公共文化发展中心', 'Sinaai-Waas', '$23,789'],
                ['开发与部署单位', '广州市品高软件开发有限公司', 'Sinaai-Waas', '$23,789'],
                ['应用描述', '全国公共文化发展中心', 'Sinaai-Waas', '$23,789']
            ]
        };
        this.tableData3 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice (Success)','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ],
                ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest' ]
            ]
        };
    }
}
