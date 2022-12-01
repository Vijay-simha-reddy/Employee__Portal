import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import  {Router} from '@angular/router';
import { Employee } from '../model/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  employee!: Employee;
  id!:number;
  statusCode:any;

  constructor(private user:UserService , private router:Router,private route:ActivatedRoute) { }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.user.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }
  dashboard(id:number){
    this.router.navigate(['/dashboard',id]);
  }
}