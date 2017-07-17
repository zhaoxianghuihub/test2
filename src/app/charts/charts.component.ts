import { Component, OnInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'charts-cmp',
    templateUrl: './charts.component.html'
})

export class ChartsComponent implements OnInit{
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
            headerRow: [ '实例名称', 'CPU',  '内存', '存储', '状态' ,'操作'],
            dataRows: [
                [ 'web服务器','8核', '16G', '10','运行中','1' ],
                [ 'DB服务器','8核', '16G', '20','运行中','1' ]
            ]
        };
    }
}
