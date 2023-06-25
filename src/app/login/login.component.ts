import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom //disable all global styles for this component
})
export class LoginComponent implements OnInit {
  connexionForm: FormGroup = this.fb.group({
    username:['', Validators.compose([Validators.required])],
    password:['', Validators.compose([Validators.required])],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.connexionForm.reset();
  }

}
