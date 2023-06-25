import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-become-teacher',
  templateUrl: './become-teacher.component.html',
  styleUrls: ['./become-teacher.component.scss']
})
export class BecomeTeacherComponent implements OnInit {

  isLinear = false;
  defaultGender = 'Homme';

  genders = [
    {id:"1", value:"Homme"},
    { id: "2", value: "Femme" },
    { id: "3", value: "Autre" }


  ]

  subjects =["MATHÉMATIQUE", "CHIMIE", "PHYSIQUE", "PHILOSOPHIE"]

  constructor() { }

  ngOnInit(): void {
  }

  // PERSONAL INFO FORM
  personalInfo = new FormGroup({


    firstname: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),

    email: new FormControl('', [Validators.email, Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(8),]),
    sex: new FormControl(this.defaultGender),
    highestSchoolLovel: new FormControl(''),
    presentSituation: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(2)]),



  });

  disableFormPersonalInfo() {
    this.personalInfo.controls['firstname'].disable();
    this.personalInfo.controls['lastname'].disable();
    this.personalInfo.controls['phone'].disable();
    this.personalInfo.controls['highestSchoolLovel'].disable();
    this.personalInfo.controls['presentSituation'].disable();

  }



  enableFormPersonalInfo() {
    this.personalInfo.controls['firstname'].enable();
    this.personalInfo.controls['lastname'].enable();
    this.personalInfo.controls['phone'].enable();
    this.personalInfo.controls['highestSchoolLovel'].enable();
    this.personalInfo.controls['presentSituation'].enable();

  }




  get f() {

    return this.personalInfo.controls;

  }

//SKILLS FORM
  skillInfo = new FormGroup({


    subjects: new FormArray([]),
    ableToTeach: new FormControl('', [Validators.required]),

    isFrenchYourMainLanguage: new FormControl('', [Validators.required]),
    numberOfAvailableHoursPerWeek: new FormControl('', [Validators.required]),
    cv: new FormControl(''),
    

  });

  disableFormSkillInfo() {
    this.skillInfo.controls['subjects'].disable();
    this.skillInfo.controls['ableToTeach'].disable();
    this.skillInfo.controls['isFrenchYourMainLanguage'].disable();
    this.skillInfo.controls['numberOfAvailableHoursPerWeek'].disable();
    this.skillInfo.controls['cv'].disable();

  }



  enableFormSkillInfo() {
    this.skillInfo.controls['subjects'].enable();
    this.skillInfo.controls['ableToTeach'].enable();
    this.skillInfo.controls['isFrenchYourMainLanguage'].enable();
    this.skillInfo.controls['numberOfAvailableHoursPerWeek'].enable();
    this.skillInfo.controls['cv'].enable();

  }




  get s() {

    return this.personalInfo.controls;

  }



  //ASIDE FORM
  asideInfo = new FormGroup({


    legallyAutorised: new FormControl('', [Validators.required]),

    howDidYouKnow: new FormControl('', [Validators.required]),
    


  });

  disableFormAsideInfo() {
    this.asideInfo.controls['legallyAutorised'].disable();
    this.asideInfo.controls['howDidYouKnow'].disable();
   

  }



  enableFormAsideInfo() {
    this.asideInfo.controls['legallyAutorised'].enable();
    this.asideInfo.controls['howDidYouKnow'].enable();

  }




  get a() {

    return this.asideInfo.controls;

  }

  handleSubjets(e: any){
    let subject = this.skillInfo.get('subjects') as FormArray;
    if (e.target.checked) {
      subject.push(new FormControl(e.target.value))
    } 
    else{
      let i =0;
      subject.controls.forEach(
        (s:any)=>{
          if(s.value == e.target.value){
            subject.removeAt(i)
            return
          }
          i++;
        }
      )
    }
    console.log(e.target.checked)

  }
}
