import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Employee } from '../model/employee.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
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
