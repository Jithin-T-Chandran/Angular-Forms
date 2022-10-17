/*
import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
registrationForm = new FormGroup({
  userName: new FormControl('Jithin'),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
  address:new FormGroup({
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
  })
});

loadApiData(){
  //setValue is used for all form controls
  // this.registrationForm.setValue({
  //   userName:"Jithin",
  //   password:"test",
  //   confirmPassword:"test",
  //   address:{
  //     city:"City",
  //     state:"State",
  //     postalCode:"1234356"
  //   }
  // })

  //patchValue is used for few of the form controls
  this.registrationForm.patchValue({
    userName:"Jithin",
    password:"test",
    confirmPassword:"test",
  })
}
  
}

*/