import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validator/password-validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePwdForm!: FormGroup;
  
  constructor(fb: FormBuilder) { 
    this.changePwdForm = fb.group({
      currentPassword: ['', Validators.required, PasswordValidator.IsCurrentPasswordNotValid],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmNewPassword: ['', Validators.required]
    }, 
    { 
      validators: [PasswordValidator.IsConfirmNewPasswordNotMatch]
    });
  }

  ngOnInit(): void {
    /*this.changePwdForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required, PasswordValidator.IsCurrentPasswordNotValid),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      confirmNewPassword: new FormControl('', Validators.required)
    }, PasswordValidator.IsConfirmNewPasswordNotMatch);*/

  }

  get currentPwd(){
    return this.changePwdForm.get("currentPassword");
  }
  get newPwd(){
    return this.changePwdForm.get("newPassword");
  }
  get confirmNewPwd(){
    return this.changePwdForm.get("confirmNewPassword");
  }
  checkValidationError() {
    return !(!this.changePwdForm?.errors
        && !this.currentPwd?.errors
        && !this.newPwd?.errors
        && !this.confirmNewPwd?.errors);
  }
  formSubmit(){}
}
