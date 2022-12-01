import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { UserService } from 'src/app/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  employees!:Employee[];

  constructor(private user:UserService, private location:Location) { }

  ngOnInit():void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.user.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
}
backClicked() {
  this.location.back();
}
}
