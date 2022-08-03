import { AdmissionService } from './../admission.service';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import * as $ from 'jquery';
import { StepperOrientation } from '@angular/material/stepper';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form = this.fb.group({
 schools: this.fb.array([]),
 siblings: this.fb.array([])
   
});
// Form = this.fb.group({
// siblings: this.fb.array([])
// });
  fileName:string="filellx";
  selectedSupport:boolean=false;
  selectedClassMother:boolean=false;
  selectedClassFather:boolean=false;
  selectedVal:boolean=true;
  selectedHealth:boolean=true;
  selectedBus:boolean=true;
  selectedMarital:string="married";
  selectedGender:string="female"
  languages:any[] = [];
  Nationalities:any[]= [];
  Genders = [
    { index: 1, value: 'Male' },
    { index: 2, value: 'Female' },
  ];
  Religions = [
    { index: 1, value: 'Muslim' },
    { index: 2, value: 'Other' },
  ];
  Schools = [
    { index: 1, value: 'Primary' },
    { index: 2, value: 'Secondary' },
  ];
  yearGroups = [
    { index: 1, value: 'groupOne' },
    { index: 2, value: 'groupTwo' },
  ];

  months = [
    { index: 1, value: 'June' },
    { index: 2, value: 'July' },
  ];
 
  error: string = '';
  submitted: boolean = false;
  submittedStudent: boolean = false;
  submittedSchool: boolean = false;
  submittedParent: boolean = false;
  submittedSibling: boolean = false;
  submittedOther: boolean = false;

  details: boolean = false;
  submittedForm: boolean = false;
  InsertionForm = new FormGroup({
    firstName: new FormControl(null, []),
    secondName: new FormControl(null, []),
    lastName: new FormControl(null, []),
    address: new FormControl(null, []),
    age: new FormControl(null, []),
    email: new FormControl(null, []),
    phoneNumber: new FormControl(null, []),
    religion: new FormControl(null, []),
  });
  studentForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    secondName: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    lastName: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    firstNameArabic: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    secondNameArabic: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    lastNameArabic: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    birthDate: new FormControl(null, [
      // Validators.pattern('/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/'),

      Validators.required,
    ]),
    placeOfBirth: new FormControl(null, [Validators.required]),
    nationality: new FormControl(null, [Validators.required]),
    studentID: new FormControl(null, [
      Validators.pattern('^[0-9]{14}$'),
      Validators.required,
    ]),
    gender: new FormControl(null, [Validators.required]),
    religion: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    mobile: new FormControl(null, [
      Validators.pattern('^[0-9]{11}$'),
      Validators.required,
    ]),
    language: new FormControl(null, [
      Validators.required,
    ]),
    studentPhoto: new FormControl(null, [
      Validators.required,
    ]),
    reportCard: new FormControl(null, []),
    birthCertificate: new FormControl(null, [
      Validators.required,
    ]),
   referenceLetter: new FormControl(null, []),
    anotherName: new FormControl(null, [Validators.pattern('[a-zA-Z ]*')]),
    anotherEmail: new FormControl(null, [Validators.email]),
    anotherMobile: new FormControl(null, [Validators.pattern('^[0-9]{11}$')]),
  });
 
  schoolForm = new FormGroup({
    // previousSchoolForm:new FormGroup({
      nursery: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
      yearsAttended: new FormControl(null, [Validators.required]),
      reasonForLeaving: new FormControl(null, [Validators.required]),
    // }),
   
 school: new FormControl(null, [Validators.required]),
    yourGrade: new FormControl(null, [Validators.required]),
    academicYear: new FormControl(null, [Validators.required]),
    month: new FormControl(null, [Validators.required]),
    reasonForApplying: new FormControl(null, []),
    learningSupport: new FormControl(null, [Validators.required]),
    detailsSupport: new FormControl(null, [Validators.required]),
    foreigner: new FormControl(null, []),
    egyptian: new FormControl(null, []),
    anotherSchool: new FormControl(null, []),
  });
  parentForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    secondName: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    lastName: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    firstNameArabic: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    secondNameArabic: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    lastNameArabic: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    religion: new FormControl(null, [Validators.required]),
    nationality: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.pattern('^[0-9]{9}$'),
      Validators.required,
    ]),
    mobile: new FormControl(null, [
      Validators.pattern('^[0-9]{11}$'),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    school: new FormControl(null, [Validators.required]),
    university: new FormControl(null, [Validators.required]),
    occupation: new FormControl(null, [Validators.required]),
    employer: new FormControl(null, [Validators.required]),
    typeOfBusiness: new FormControl(null, [Validators.required]),
    workAddress: new FormControl(null, [Validators.required]),
    workMobile: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{11}$'),
    ]),
    workPhone: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{9}$'),
    ]),
    businessWebsite: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(www)\\.([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?$'
      ),
    ]),
    alsson: new FormControl(null, [Validators.required]),
    classOf: new FormControl(null, [Validators.required]),
    fatherId: new FormControl(null, [Validators.required]),
    firstNameMom: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    secondNameMom: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    lastNameMom: new FormControl(null, [
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]),
    firstNameArabicMom: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    secondNameArabicMom: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    lastNameArabicMom: new FormControl(null, [
      Validators.pattern('^[\u0621-\u064A]+$'),
      Validators.required,
    ]),
    religionMom: new FormControl(null, [Validators.required]),
    nationalityMom: new FormControl(null, [Validators.required]),
    addressMom: new FormControl(null, [Validators.required]),
    phoneMom: new FormControl(null, [
      Validators.pattern('^[0-9]{11}$'),
      Validators.required,
    ]),
    mobileMom: new FormControl(null, [
      Validators.pattern('^[0-9]{11}$'),
      Validators.required,
    ]),
    emailMom: new FormControl(null, [Validators.email, Validators.required]),
    schoolMom: new FormControl(null, [Validators.required]),
    universityMom: new FormControl(null, [Validators.required]),
    occupationMom: new FormControl(null, []),
    employerMom: new FormControl(null, []),
    typeOfBussinessMom: new FormControl(null, []),
    workAddressMom: new FormControl(null, []),
    workMobileMom: new FormControl(null, [Validators.pattern('^[0-9]{11}$')]),
    workPhoneMom: new FormControl(null, [Validators.pattern('^[0-9]{9}$')]),
    businessWebsiteMom: new FormControl(null, [
      Validators.pattern(
        '^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$'
      ),
    ]),
    alssonMom: new FormControl(null, [Validators.required]),
    classOfMom: new FormControl(null, [Validators.required]),
    MotherId: new FormControl(null, [Validators.required]),
    
  });
  siblingsForm = new FormGroup({
    Name: new FormControl(null, [Validators.required]),
    currentSchool: new FormControl(null, [Validators.required]),
    Age: new FormControl(null, [Validators.required]),
    Grade: new FormControl(null, [Validators.required]),
    siblingsInAlsson: new FormControl(null, [Validators.required]),
  });
  otherForm = new FormGroup({
    maritalStatus: new FormControl(null, [Validators.required]),
    stepParent: new FormControl(null, [Validators.required]),
    name: new FormControl(null, []),
    gender: new FormControl(null, []),
    mobile: new FormControl(null, [Validators.pattern('^[0-9]{11}$')]),
    address: new FormControl(null, []),
    email: new FormControl(null, [Validators.email]),
    parentName: new FormControl(null, []),
    firstName: new FormControl(null, [Validators.required]),
    firstRelationship: new FormControl(null, [Validators.required]),
    firstMobile: new FormControl(null, [Validators.pattern('^[0-9]{11}$'),Validators.required]),
    firstAddress: new FormControl(null,[Validators.required]),
    firstEmail: new FormControl(null, [Validators.email,Validators.required]),
    secondName: new FormControl(null, [Validators.required]),
    secondRelationship: new FormControl(null, [Validators.required]),
    secondMobile: new FormControl(null, [Validators.pattern('^[0-9]{11}$'), Validators.required]),
    secondAddress: new FormControl(null, [Validators.required]),
    secondEmail: new FormControl(null, [Validators.email, Validators.required]),
    busRequired: new FormControl(null, [Validators.required]),
    busAddress: new FormControl(null, [Validators.required]),
    healthProblem: new FormControl(null, [Validators.required]),
    healthProblemDetails: new FormControl(null, [Validators.required]),
    doctorName: new FormControl(null, [Validators.required]),
    doctorPhone: new FormControl(null, [Validators.required]),
  });
  conditionsForm = new FormGroup({
    agree: new FormControl(null, [Validators.required]),
    sign: new FormControl(null, [Validators.required]),
  });

  isOptional = false;
  registerSucess: boolean = false;

  constructor(private admissions:AdmissionService,private _Router: Router,private _formBuilder: FormBuilder,private fb:FormBuilder) {
   
  }
  get schools() {
    return this.form.controls["schools"] as FormArray;
  }
  get siblings() {
    return this.form.controls["siblings"] as FormArray;
  }
  addShool() {
    const lessonForm = this.fb.group({
      nurserySchool: new FormControl(null, [Validators.required]),
      gradeSchool: new FormControl(null, [Validators.required]),
      yearsAttendedSchool: new FormControl(null, [Validators.required]),
      reasonForLeavingSchool: new FormControl(null, [Validators.required]),
     
    });
    this.submittedForm = true;
    if(this.schoolForm.get('nursery')?.value&&this.schoolForm.get('grade')?.value&&this.schoolForm.get('yearsAttended')?.value&&this.schoolForm.get('reasonForLeaving')?.value){
      this.schools.push(lessonForm);
    }
  }
  addSibling(){
    const lessonForm = this.fb.group({
    NameSibling: new FormControl(null, [Validators.required]),
    currentSibling: new FormControl(null, [Validators.required]),
    AgeSibling: new FormControl(null, [Validators.required]),
    GradeSibling: new FormControl(null, [Validators.required]),
    AlssonSibling: new FormControl(null, [Validators.required]),
   });
   this.submittedForm = true;
   if(this.siblingsForm.get('Name')?.value&&this.siblingsForm.get('currentSchool')?.value&&this.siblingsForm.get('Age')?.value&&this.siblingsForm.get('Grade')?.value&&this.siblingsForm.get('siblingsInAlsson')?.value){
     this.siblings.push(lessonForm);
   }
 
   }
  deleteSchool(schoolIndex: number) {
    this.schools.removeAt(schoolIndex);
  }
  deleteSiblings(siblingIndex: number){
    this.siblings.removeAt(siblingIndex);
  }
  submitInsertForm(
    studentForm: FormGroup,
    schoolForm: FormGroup,
    parentForm: FormGroup,
    siblingsForm: FormGroup,
    otherForm: FormGroup,
    conditionsForm: FormGroup,
    schools:FormArray,siblings:FormArray
  ) {
    this.submitted = true;
    if(conditionsForm.value.agree.value!="" && conditionsForm.value.sign.value!=""){
    
    this.registerSucess = true;
      let body = {
      student: studentForm.value,
      school:(schoolForm.value),
      parent:parentForm.value,
      siblings:(siblingsForm.value),
      other:otherForm.value,
       condition:conditionsForm.value,
    }
    console.log("body",body);
    this._Router.navigate(['/success']);
  }
  }
  onSubmitStudent(){
    this.submittedStudent= true; 
  }
  onSubmitSchool(){
    this.submittedSchool= true; 
  }
  onSubmitParent(){
    this.submittedParent= true;
  }
  onSubmitSibling(){
    this.submittedSibling= true;
  }
  onSubmitOther(){
    this.submittedOther= true;
  }
  onSubmit() {
 this.submitted = true;

  }

  addSiblingData() {
    this.submittedForm = true;
  }
  enableDetails() {
    this.details = true;
  }
  disableDetails() {
    this.details = false;
  }
  changeLang(e: any) {
    e.target.value = e.target.value.replace(/[^\x00-\x7F]+/gi, '');
  }

   
 
  ngOnInit(): void {
   
    this.admissions.getAdmissions().subscribe(response=>{
     
      console.log(response);
      this.languages=response.data.languages;
      this.Nationalities=response.data.countries;
      console.log("languages",this.Nationalities);
    
     
    })
  }
}
