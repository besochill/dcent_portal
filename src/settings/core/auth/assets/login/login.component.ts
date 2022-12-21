import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, NgForm, UntypedFormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginNgForm') loginNgForm!: NgForm;
  loginForm!: UntypedFormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['username', [Validators.required]],
      password: ['andsomerandompassword', [Validators.required]],
      rememberMe: ['', [Validators.required]]
    });
  }

  login () {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      localStorage.setItem('token', response.token)
      this.router.navigate(['/'])
    })
  }
}
