import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Employee } from '../model/employee.model';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  employees!:Employee[];


  constructor(private user:UserService) { }

  ngOnInit():void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.user.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  
}
