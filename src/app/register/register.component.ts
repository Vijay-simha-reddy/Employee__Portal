import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Employee } from '../model/employee.model';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 gender!:string[]
 type!:string[]
 employeeStatus!:string[]

employee:Employee = new Employee();

register=new FormGroup({

  firstName:new FormControl(null,[Validators.required,Validators.minLength(2)]),       
  lastName:new FormControl(null,[Validators.required,Validators.minLength(2)]),
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
  constructor(private userService:UserService, private router:Router) { 
   this.gender=['Female','Male']
   this.type=['EMPLOYEE','ADMIN']
   this.employeeStatus=['BILLING','BENCH']
  }

ngOnInit(): void {
  }
saveEmployee(){
  this.userService.createEmployee(this.employee).subscribe(data=>{
    console.log(data);
    this.goToEmoloyeeList();
  },
  error=>console.log(error));
}

goToEmoloyeeList(){
  this.router.navigate(['/view'])
}
 onSubmit(){
  console.log(this.employee)
  this.saveEmployee();
 }
}