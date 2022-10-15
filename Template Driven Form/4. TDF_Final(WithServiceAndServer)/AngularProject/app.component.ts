/*

iimport { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
User
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public courses =['Angular','React','Vue'];
  courseHasError = true;
  submitted = false;
  errorMsg="";

  public userModel = new User("Jithin","jithintchandran123@gmail.com",8921471613,"default","morning",true)
  constructor(private _enrollmentService:EnrollmentService){}
  
  
  validateCourse(value: any){
    if(value === "default"){
      this.courseHasError = true;
    }else{
      this.courseHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log("Success",data),
        error => this.errorMsg = error.statusText
        )

  }
}

*/