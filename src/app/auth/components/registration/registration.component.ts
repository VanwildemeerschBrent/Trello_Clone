import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmedPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get name(): AbstractControl { return this.registrationForm.get('name'); }
  get email(): AbstractControl { return this.registrationForm.get('email'); }
  get password(): AbstractControl { return this.registrationForm.get('password'); }
  get confirmedPassword(): AbstractControl { return this.registrationForm.get('confirmedPassword') }

  onRegister(): void {
    this.isSubmitted = true;
    if (this.registrationForm.valid && this.doPasswordsMatch()) {
      const newUser = new User();
      newUser.name = this.registrationForm.get('name').value;
      newUser.email = this.registrationForm.get('email').value;
      newUser.password = this.registrationForm.get('password').value;
      this.userService.register(newUser).subscribe((res) => {
        this.router.navigateByUrl('/auth/login');
      })
    }
  }

  doPasswordsMatch(): boolean {
    const password = this.registrationForm.get('password').value;
    const confirmedPassword = this.registrationForm.get('confirmedPassword').value;
    return password.length === confirmedPassword.length && password === confirmedPassword;
  }

}
