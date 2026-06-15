import { Component, inject, OnInit } from '@angular/core';
import { FacilityService } from '../services/facility-service';
import { Facility } from '../models/facility';

@Component({
  selector: 'app-facility',
  imports: [],
  templateUrl: './facility.html',
  styleUrl: './facility.css',
})
export class FacilityCard implements OnInit{
  sum = 0;
  facilities: Facility[] = [];

  private service = inject(FacilityService);

  ngOnInit(): void {
    this.sum = this.service.getSumOfFacilities();
    this.facilities = this.service.getTopFacilities();
  }

}
