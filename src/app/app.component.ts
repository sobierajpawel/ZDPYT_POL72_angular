import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavigationComponent, RouterModule]
})
export class AppComponent {
  title = 'student-manager-angular';
  // isActive : boolean = false;
  // newTitle : string = "test";
  // newTitleStr = "test";
  // n : number = 53;
  paragraphText = "Wartosc testowa";
  isHeadersVisible = false;

  clickBtn(){
    //alert("Test");
    this.paragraphText = "Inna wartosc";
  }

  getBackText(){
    this.paragraphText = "Wartosc testowa";
    
  }

  showHeaders(){
    this.isHeadersVisible = !this.isHeadersVisible;

    if (this.isHeadersVisible){
      alert("");
    } else {
      //...
    }
  }
}
