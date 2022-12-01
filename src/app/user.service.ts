import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id:string="";
  type:string="";
  employeeId:string="";
    
  
  baseURL="http://localhost:8080/api/v1/employees/emp";

  updateURL="http://localhost:8080/api/v1/employees/update";

  url="http://localhost:8080/api/v1/employees/login";


  constructor(private client:HttpClient,private route:Router) { }
  // login 
     login(employeeId:string,password:string){

   let data={employeeId:employeeId,password:password}
   let statusCode;
   this.client.post<any>(this.url,data).subscribe(res=>{
    this.id=  res.id;
    this.type=res.type;
    this.employeeId=res.employeeId;
    localStorage.setItem('id',this.id);
    localStorage.setItem('type',this.type);
    localStorage.setItem('employeeId',this.employeeId);
    if(this.type=='ADMIN'){
   this.route.navigate(["/dashboard",this.id])
    }
    else{
      this.route.navigate(['/emprofile',this.id])
    }
   statusCode= "Success"
   },
   error=>{
    statusCode= "incorrect Id or Password" ;
    alert(statusCode) 
   }
   )
return statusCode;
  }
  /* onboarding */
  getEmployeesList(): Observable<Employee[]>{
    return this.client.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.client.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.client.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.client.put(`${this.updateURL}/${id}`, employee);
  }

}
