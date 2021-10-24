import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidator {
    static IsConfirmNewPasswordNotMatch(control: AbstractControl): ValidationErrors | null {
        let newPwdValue= control.get('newPassword')?.value;
        let confirmNewPwdValue = control.get('confirmNewPassword')?.value;
     
        if(newPwdValue !== confirmNewPwdValue)
          return {"confirmPasswordNotMatch": true};
        return null;
    }

    static IsCurrentPasswordNotValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(control.value != "Sayanti123") {
                    resolve({"currentPasswordNotValid": true})
                }
                else {
                    resolve(null);
                }
            }, 2000)
        })
    }
}