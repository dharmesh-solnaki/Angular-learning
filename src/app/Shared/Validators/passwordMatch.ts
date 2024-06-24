import {  FormGroup } from "@angular/forms";

export const validatePasswords = (
  password: string,
  confirmPassword: string
) => {


  return  function( form:FormGroup){
    const passControl = form.controls[password];
    const confirmPasswordControl = form.controls[confirmPassword]

    return     passControl.value===confirmPasswordControl.value ? null:  
    confirmPasswordControl.setErrors({passwordMismatch:true})
    }
};
 