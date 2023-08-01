import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tt-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})

  @Output()
  formSubmitted = new EventEmitter<'admin' | 'user'>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      role: ['', Validators.required]
    });
  }

  onFormSubmit(event: MouseEvent): void {
    event.preventDefault();

    const role = this.loginForm.value.role as 'admin' | 'user';

    this.formSubmitted.emit(role);
  }
}
