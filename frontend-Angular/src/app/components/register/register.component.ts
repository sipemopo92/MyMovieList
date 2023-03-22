import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister: FormGroup = new FormGroup({});


  constructor(private router: Router) { }


  ngOnInit() {
    this.newFormRegister();
  }


  newFormRegister() {
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required] ),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
  get name() { return this.formRegister.get('name'); }
  get email() { return this.formRegister.get('email'); }
  get password() { return this.formRegister.get('password'); }


  register() {
    let name = this.formRegister.value.name;
    let email = this.formRegister.value.email;
    let password = this.formRegister.value.password;
    console.log(`NAME: ${name}`);
    console.log(`EMAIL: ${email}`);
    console.log(`PASSWORD: ${password}`);
  }


  goToLogin() {
    this.router.navigate(['login']);
  }

}
