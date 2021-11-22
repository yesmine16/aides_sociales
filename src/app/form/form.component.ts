import { Component, OnInit,ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { Formm } from '../formm';
import { FormmService } from '../formm.service';
import { FormGroup, FormBuilder, FormControl, Validators, Form,FormsModule, ReactiveFormsModule ,FormArray} from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  avatar="./assets/avatar.png"
  formm: Formm = new Formm();
  add:Address=new Address();
  form1 : FormGroup;
  valid=false;
  parentList: any = [
    { id: 1, name: 'الأب والأم' },
    { id: 2, name: 'الأب' },
    { id: 3, name: 'الأم' },
    { id: 4, name: 'الجد' },
    { id: 5, name: 'الجدة' },
    { id: 6, name: 'لا أحد' },
  ];
  tab: Formm[];
tabb:Address[];
  private getform(){
    this.webService.getList().subscribe(data => {
      this.tab = data;
    });
  }
  constructor(private webService: FormmService, private formBuilder: FormBuilder,private route: ActivatedRoute,private address:AddressService) {  
    this.createForm();
  
  }
public userFile: any = File ; 
  ngOnInit(): void {
    this.getform();

   
  }
  url: string = 'form';
  List: Array<Formm>
  form: Formm = undefined

  private createForm() {
    this.form1 = this.formBuilder.group({
      website: this.formBuilder.array([]),
      prenom: new FormControl(this.form ? this.form.prenom : '', Validators.required),
      nom: new FormControl(this.form ? this.form.prenom : '', Validators.required),
      date: new FormControl(this.form ? this.form.date : '', Validators.required),
      datenaiss: new FormControl(this.form ? this.form.datenaiss : '', Validators.required),
      address: new FormControl(this.form ? this.form.address : '', Validators.required),
      phone: new FormControl(this.form ? this.form.phone : '', Validators.required),
      civil: new FormControl(this.form ? this.form.civil : '', Validators.required),
      health: new FormControl(this.form ? this.form.health : '', Validators.required),
      kids: new FormControl(this.form ? this.form.kids : '', Validators.required),
      kidsstudy: new FormControl(this.form ? this.form.kidsstudy : '', Validators.required),
      unem: new FormControl(this.form ? this.form.unem : '', Validators.required),
      handicap: new FormControl(this.form ? this.form.handicap : '', Validators.required),
      parent: new FormControl(this.form ? this.form.parent : '', Validators.required),
      salary: new FormControl(this.form ? this.form.salary : '', Validators.required),
      sick: new FormControl(this.form ? this.form.sick : '', Validators.required),
      dep: new FormControl(this.form ? this.form.dep : '', Validators.required),
      basics: new FormControl(this.form ? this.form.basics : '', Validators.required),
      total: new FormControl(this.form ? this.form.total : '', Validators.required),
      img: new FormControl(this.form ? this.form.img : ''),
      state: new FormControl(this.form ? this.form.state : '', Validators.required),
      house: new FormControl(this.form ? this.form.house : '', Validators.required),
      feedback: new FormControl(this.form ? this.form.feedback : '', Validators.required),
      cin: new FormControl(this.form ? this.form.cin : '', Validators.required),
      diplome: new FormControl(this.form ? this.form.diplome : '', Validators.required),
      job: new FormControl(this.form ? this.form.job : '', Validators.required),

      
    });
  }


  save(){
     this.webService.create(this.formm).subscribe( data =>{
        this.valid=true;
        console.log(data);
        Swal.fire('تم التسجيل بنجاح', 'شكرا', 'success').then((result) => {
          // Reload the Page
          location.reload();
        });

      },    error => console.log(error));
      Swal.fire('عفوا', 'الرجاء التثبت من المعطيات', 'warning')
      this.form1.markAllAsTouched();
  }
  save2(){
    this.address.create(this.add).subscribe( data =>{
       this.valid=true;
       console.log(data);
       Swal.fire('تم التسجيل بنجاح', 'شكرا', 'success').then((result) => {
         // Reload the Page
         location.reload();
       });

     },    error => console.log(error));
     Swal.fire('عفوا', 'الرجاء التثبت من المعطيات', 'warning')
     this.form1.markAllAsTouched();
 }
  submitForm(){
    console.log(this.formm);
    this.save();
this.save2();

  }
 
  onCheckboxChange(e) {
    const website: FormArray = this.form1.get('website') as FormArray;
   
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
    }
  }

  selectFile(e){
    if (e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{this.avatar=event.target.result;}
      const file = e.target.files[0];
      this.userFile=file;
    }
        }
       
        counter(i: number) {
          return new Array(i);
      }    
       
}
 

