import { Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';


export const routes: Routes = [
    //localhost:4200/students -> ListStudent - <router-outlet>
    {path:"students", component:ListStudentComponent},
    //localhost:4200/add-student -> AddStudent - <router-outlet>
    {path:"add-student", component: AddStudentComponent}
];
