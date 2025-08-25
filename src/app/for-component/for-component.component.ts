import { Component } from '@angular/core';

@Component({
  selector: 'app-for-component',
  imports: [],
  templateUrl: './for-component.component.html',
  styleUrl: './for-component.component.scss'
})
export class ForComponentComponent {
  emps : any[] = [
    {empName: 'Alaa', empNumber: '0998653381', empEmail: 'alaa.zrekey@gmail.com', empDept: 'IT'},
    {empName: 'Ali', empNumber: '0994652381', empEmail: 'ali.zrekey@gmail.com', empDept: 'TEC'},
    {empName: 'Nash', empNumber: '0938653681', empEmail: 'Yara.zrekey@gmail.com', empDept: 'SWE'}
  ]
}
