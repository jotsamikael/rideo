import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DataService } from '../services/data.service';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  title = 'autocomplete';
  model: NgbDateStruct;

  trips:any;

  options: string[] = ['Mvolye-Trois statues', 'Madagascar- deux poteaux' ,'Acacia-Marché','Bonapriso-Prestige','Bonanjo- Kenya Airline', 'Akwa-Kystal Palace','Mvan-Pont', 'Mendong-Gendarmerie', 'Ndogpassi-Marché','Palar-Marché' ,'Akwa-Cathédral', 'Odja-Petit Marché'];

  processing
  

  filteredOptionsDeparture: Observable<any[]>;
  filteredOptionsDestination: Observable<any[]>;

  form = new FormGroup({

    departure: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    date: new FormControl(),
    seat: new FormControl(),

  });
  showAutocompleteDep: boolean;
  showAutocompleteDes: boolean;


  constructor(private dataservice: DataService) {
    this.filteredOptionsDeparture = this.form.get('departure').valueChanges.pipe(
      startWith(''),
      map((value) => this._filterDepature(value))
    );
    this.filteredOptionsDestination = this.form.get('destination').valueChanges.pipe(
      startWith(''),
      map((value) => this._filterDestination(value))
    );
  }

  private _filterDepature(value: any): any[] {
    const filterValue = value.toLowerCase();

    console.log(value.toLowerCase())
    if (filterValue && filterValue.length >= 2) {
      this.showAutocompleteDep = true;
    } else {
      this.showAutocompleteDep = false;
    }
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private _filterDestination(value: any): any[] {
    const filterValue = value.toLowerCase();

    console.log(value.toLowerCase())
    if (filterValue && filterValue.length >= 2) {
      this.showAutocompleteDes = true;
    } else {
      this.showAutocompleteDes = false;
    }
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }


  


  ngOnInit(): void {
    this.dataservice.getData().subscribe(

      res => {
      
        this.trips = res;
        console.log(this.trips.trips)
      }
      
    );
    
  }





  disableForm() {
    this.form.controls['departure'].disable();
    this.form.controls['destination'].disable();
    this.form.controls['date'].disable();
    this.form.controls['seat'].disable();




  }

  enableForm() {
    this.form.controls['departure'].enable();
    this.form.controls['destination'].enable();
    this.form.controls['date'].enable();
    this.form.controls['seat'].enable();



  }

  get f() {

    return this.form.controls;

  }

 

  findTrip(){
    
  }
}
