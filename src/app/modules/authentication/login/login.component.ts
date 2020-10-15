import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;


  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get email(): AbstractControl { return this.loginForm.get('email'); }
  get password(): AbstractControl { return this.loginForm.get('password'); }

  onLogin(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe((user) => {
        console.log('User received');
      })
    } else {
      console.log('Form is not valid', this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
  }

}
