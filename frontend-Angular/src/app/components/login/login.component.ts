import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});


  constructor(private router: Router, private authservice: AuthService) { }


  ngOnInit() {
    this.newFormLogin();
  }

  newFormLogin() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required] ),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
  get email() { return this.formLogin.get('email'); }
  get password() { return this.formLogin.get('password'); }


  login() {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    console.log(`EMAIL: ${email}`);
    console.log(`PASSWORD: ${password}`);
  }

  goToRegistration() {
    this.router.navigate(['register']);
  }


}
