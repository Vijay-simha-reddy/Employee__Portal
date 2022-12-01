import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { ViewComponent } from './view/view.component';
import { EmprofileComponent } from './emprofile/emprofile.component'; 
import { AttendanceComponent } from './attendance/attendance.component';
import { LeavesComponent } from './leaves/leaves.component'; 
import { ProjectFormComponent } from './project-form/project-form.component';
import { InactiveComponent } from './inactive/inactive.component'; 
import { ActiveComponent } from './active/active.component'; 
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'/log', pathMatch:'full'},
  {path:'log',component:LoginComponent},
  {path:'dashboard/:id',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'view',component:ViewComponent} , 
  {path:'emprofile/:id',component:EmprofileComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'leaves', component:LeavesComponent},
  {path:'projectform', component:ProjectFormComponent},
  {path:'inactive',component:InactiveComponent},
  {path:'active',component:ActiveComponent},
  {path:'update/:id',component:UpdateEmpComponent},
  {path:'adminprofile/:id',component:AdminProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

