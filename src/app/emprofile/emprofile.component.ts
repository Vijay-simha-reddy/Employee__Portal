import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import  {Router} from '@angular/router';
import { Employee } from '../model/employee.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emprofile',
  templateUrl: './emprofile.component.html',
  styleUrls: ['./emprofile.component.css']
})
export class EmprofileComponent implements OnInit { 
  statusMessage:any=""
  
  employee!: Employee;
  id!:number;

  constructor(private user:UserService , private router:Router,private route:ActivatedRoute) { }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.user.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

logout(){
  this.router.navigate(["/login"]);
}
view(){
  this.router.navigate(["/login"]);
}
signOut(){
  localStorage.removeItem('employeeId')
  localStorage.removeItem('password')
  this.router.navigate(['/log'])
}

}
