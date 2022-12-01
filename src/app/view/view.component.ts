import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Location } from '@angular/common';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employees!:Employee[];

  constructor(private user:UserService ,private router:Router,private location:Location) { }

  ngOnInit():void {
    this.getEmployees();
  }

  private getEmployees(){
    this.user.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  
  updateEmployee(id:number){
    this.router.navigate(['/update',id]);
  }
  backClicked() {
    this.location.back();
  }
}
