import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  connexionForm: FormGroup = this.fb.group({
    username:['', Validators.compose([Validators.required])],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.connexionForm.reset();
  }

}
