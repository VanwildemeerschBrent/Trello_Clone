import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmedPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email(): AbstractControl { return this.registrationForm.get('email'); }
  get password(): AbstractControl { return this.registrationForm.get('password'); }
  get confirmedPassword(): AbstractControl { return this.registrationForm.get('confirmedPassword'); }

  onRegister(): void {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {

    } else {
      console.log('Form is not valid', this.registrationForm.get('email').value, this.registrationForm.get('password').value);
    }
  }

}
