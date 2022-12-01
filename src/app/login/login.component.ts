import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employees!:Employee[];

  loginForm=new FormGroup({

  employeeId:new FormControl(null,[Validators.required,Validators.minLength(5)]),       
  password:new FormControl(null,[Validators.required,Validators.minLength(5)])
   })
  id:any;
  password="";
  employeeId="";
  statusMessage:any=""
  constructor(private user:UserService, private router:Router) {     
  }

  ngOnInit(): void {
  }

onSubmit(){
  this.statusMessage=this.user.login(this.employeeId,this.password)
}
}