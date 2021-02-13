import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }


  // public validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       setTimeout(() => {
  //         control.markAsTouched({onlySelf:true});
  //       })
  //     } else if( control instanceof FormControl) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }
}

