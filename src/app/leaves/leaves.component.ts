import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  type=""
  noofleaves=""
  reason=""

  constructor(private user:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  leaves(){
   
    }  

}

