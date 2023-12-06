import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpStudentsService } from '../http-students.service';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  isListVisible = false;
  students: any[] = [
    { id: 1, name:"Jan Kowalski", email:"jan@kowalski.com"},
    { id: 2, name:"Jan Nowak", email:"jan@kowalski.com"},
    { id: 3, name:"Anna Kowalska", email:"jan@kowalski.com"},
    { id: 4, name:"Adam Nowak", email:"jan@kowalski.com"},
    { id: 533, name:"Jan Testowy", email:"jan@kowalski.com"},
  ];

  constructor(private httpService : HttpStudentsService){}

  searchStudents(){
    console.log("Przed wywołaniem httpService");

    this.httpService.get().subscribe(data=>{
      console.log("Wewnątrz subscribe");
      // console.log(data);
      this.students = data;
    });

    console.log("Po wywołaniu httpService");
  }

  switchView(){
    this.isListVisible = !this.isListVisible;
  }
}
