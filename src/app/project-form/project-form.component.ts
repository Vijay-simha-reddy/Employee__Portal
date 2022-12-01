import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  employee:Employee = new Employee();
  constructor(private userService:UserService, private router:Router) { }

ngOnInit(): void {
  }

onSubmit(){
  
}
}
