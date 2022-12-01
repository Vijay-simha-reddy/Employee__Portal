import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
  add(){
    this.router.navigate(["/register"])
  }
  view(){
    this.router.navigate(["/view"])
  }
  signOut(){
    localStorage.removeItem('employeeId')
    localStorage.removeItem('password')
    this.router.navigate(['/log'])
  }
  admin_profile(id:number){
    this.router.navigate(['/adminprofile',id]);
  }

  }




