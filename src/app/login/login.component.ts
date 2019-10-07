import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.loginForm = this.fb.group({
        account: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        password: ['', Validators.required]
     });
  }

  public onClickSubmit(form) {
    console.log([form]);
  }

}
