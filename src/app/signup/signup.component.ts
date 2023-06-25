import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signForm: FormGroup = this.fb.group({
    whatsapp:['', Validators.compose([Validators.required])],
    storename:['', Validators.compose([Validators.required])],
    storeid:['', Validators.compose([Validators.required])],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.signForm.reset();
  }
}
