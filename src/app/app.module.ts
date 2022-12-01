import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmprofileComponent } from './emprofile/emprofile.component';
import { InactiveComponent } from './inactive/inactive.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LoginComponent } from './login/login.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { RegisterComponent } from './register/register.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ViewComponent } from './view/view.component';
import { ActiveComponent } from './active/active.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    AdminProfileComponent,
    DashboardComponent,
    EmprofileComponent,
    InactiveComponent,
    LeavesComponent,
    LoginComponent,
    ProjectFormComponent,
    RegisterComponent,
    UpdateEmpComponent,
    ViewComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
