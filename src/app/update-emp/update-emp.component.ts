import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl,FormGroup, Validators }  from '@angular/forms';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

employee:Employee = new Employee();

id!:number;
gender!:string[]
type!:string[]
employeeStatus!:string[]

register=new FormGroup({

  firstName:new FormControl(null,[Validators.required,Validators.minLength(5)]),       
  lastName:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  email:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  address:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  gender:new FormControl(null,[Validators.required]),
  type:new FormControl(null,[Validators.required]),
  mobileNumber:new FormControl(null,[Validators.required,Validators.minLength(10)]),
  emergencyNumber:new FormControl(null,[Validators.required,Validators.minLength(10)]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  employeeStatus:new FormControl(null,[Validators.required]),
  employeeId:new FormControl(null,[Validators.required,Validators.minLength(5)]),
  designation:new FormControl(null,[Validators.required,Validators.minLength(3)]),
  joiningDate:new FormControl(null,[Validators.required])
   })

constructor( private user:UserService,private route:ActivatedRoute, private router:Router) {
  this.gender=['Female','Male']
  this.type=['EMPLOYEE','ADMIN']
  this.employeeStatus=['BILLING','BENCH']
 }

 ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

  this.user.getEmployeeById(this.id).subscribe(data => {
    this.employee = data;
  })
}

onSubmit(){
  this.user.updateEmployee(this.id, this.employee).subscribe( data =>{
    this.goToEmployeeList();
  })
}

goToEmployeeList(){
  this.router.navigate(['/view']);
}
}
