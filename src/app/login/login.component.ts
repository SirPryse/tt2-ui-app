import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenRequest } from '../interface/tokenrequest';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: any = FormGroup;
  tokenRequest: TokenRequest = {username:"",password:""};
  submitted = false;
  constructor( private formBuilder: FormBuilder, private router: Router, private loginService: LoginService){}
  get f() { return this.registerForm.controls; }

  onSubmit() {
  
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      //alert(this.registerForm.controls.email.value);
      this.tokenRequest.password = this.f.password.value;
      this.tokenRequest.username = this.f.email.value;
      //alert(this.loginService.getResponse(this.tokenRequest));
      //alert(JSON.stringify(this.tokenRequest));
      this.router.navigateByUrl('/admin', {replaceUrl: true});
    }
   
  }

  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }

}
