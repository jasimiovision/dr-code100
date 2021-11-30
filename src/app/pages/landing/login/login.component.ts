import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/general-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public something: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.login(form.value.username, form.value.password);
    form.resetForm();

  }

}
