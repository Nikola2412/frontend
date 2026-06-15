import { Injectable } from '@angular/core';
import { Facility } from '../models/facility';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  getSumOfFacilities(): number {
    return 10;
  }

  getTopFacilities() : Facility[]{
    const facility1 = new Facility();
    facility1.name = 'Swimming Pool';
    facility1.description = 'Olympic-size outdoor pool with lounge area and lifeguard service.';
    facility1.likes = 245;

    const facility2 = new Facility();
    facility2.name = 'Fitness Center';
    facility2.description = 'Modern gym equipped with cardio machines, free weights, and personal training.';
    facility2.likes = 189;

    const facility3 = new Facility();
    facility3.name = 'Conference Hall';
    facility3.description = 'Spacious hall suitable for meetings, workshops, and corporate events.';
    facility3.likes = 132;

    const facilities = [facility1, facility2, facility3];
    return facilities;
  }
}
