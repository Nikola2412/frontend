import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchpage.html',
  styleUrl: './searchpage.css',
})
export class Searchpage {
private router = inject(Router);
searchForm: FormGroup;

  cities = [
    'Beograd',
    'Novi Sad',
    'Nis',
    'Kragujevac',
    'Subotica'
  ];

  sports = [
    'Football',
    'Basketball',
    'Valleyball',
    'Tenis',
    'Swimming'
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      nazivObjekta: [''],
      gradovi: [[]],
      sport: [''],
      tipTerena: ['']
    });
  }

  onSearch(): void {
    const form = this.searchForm.value;
    this.router.navigate(['/results'], {
      queryParams: {
        naziv: form.nazivObjekta || null,
        gradovi: form.gradovi?.length ? form.gradovi.join(',') : null,
        sport: form.sport || null,
        tipTerena: form.tipTerena || null
      }
    });                         
  }
}
