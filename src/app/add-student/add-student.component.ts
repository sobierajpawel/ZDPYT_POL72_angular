import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpStudentsService } from '../http-students.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  fullName : string = "Piotr Kowalski";
  email : string = "kowalski@gmail.com";
  isValidationError = false;
  validationDetails : string = "";
  isSuccessSent = false;
  isSaving = false;

  constructor(private httpStudentService : HttpStudentsService){

  }

  log(){
    console.log(this.fullName);
    console.log(this.email);
  }

  validate(){
    if (!this.email.includes("@")){
      this.validationDetails = "Brak znaku @ w emailu!"; 
      return false;
    }

    if (!this.email.includes(".")){
      this.validationDetails = "Brak znaku . w emailu!"
      return false;
    }

    if (!this.fullName.startsWith(this.fullName[0].toUpperCase())){
      this.validationDetails = "Imię i nazwisko powinno zaczynać się z duzej litery!";
      return false;
    }

    return true;
  }

  save(){
    this.isSaving = true;
    this.isSuccessSent = false;
    this.isValidationError = false;

    if (this.validate() == false){
      this.isValidationError = true;
      this.isSaving = false;
      return;
    }

    //... reszta kodu

    this.httpStudentService.post(this.fullName, this.email)
      .pipe(delay(2000))
      .subscribe(_=>{
        this.isSuccessSent = true;
        this.isSaving = false;
      });
  }
}
