import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';



const routes: Routes = [{ path: '', redirectTo: 'students', pathMatch: 'full' },
{ path: 'students', component: StudentListComponent },
{ path: 'students/:id', component: StudentDetailsComponent },
{ path: 'addStudent', component: AddStudentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
