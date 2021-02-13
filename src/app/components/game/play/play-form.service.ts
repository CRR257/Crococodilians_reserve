import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormControlService } from "../../../service/form/form-control.service";


@Injectable({
  providedIn: 'root'
})

export class PlayFormService {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private formControl: FormControlService ) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      iconPlayer: new FormControl('', Validators.required),
      iconMachine: new FormControl('')
    })
  }

  // get isValid(): boolean {
  //   if(!this.form.valid) {
  //     //this.formControl.validateAllFormFields(this.form);
  //     return false;
  //   }
  //   return true;
  // }










}
