import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion';
import { Facility } from '../models/facility';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {

  getTopPromotions(): Promotion[] {

    let promotions: Promotion[] = [];
    // PROMOCIJA 1
    let p1 = new Promotion();
    p1.name = "Letnji popust";
    p1.facility = new Facility();
    p1.facility.name = "Hotel Balkan";
    p1.validFrom = new Date("2026-06-01");
    p1.validTo = new Date("2026-06-30");
    p1.percentDiscount = 20;
    // PROMOCIJA 2
    let p2 = new Promotion();
    p2.name = "Wellness vikend";
    p2.facility = new Facility();
    p2.facility.name = "Spa Centar Relax";
    p2.validFrom = new Date("2026-06-10");
    p2.validTo = new Date("2026-07-10");
    p2.fixedDiscount = 3000;
    // PROMOCIJA 3
    let p3 = new Promotion();
    p3.name = "Family paket";
    p3.facility = new Facility();
    p3.facility.name = "Apartmani Sunce";
    p3.validFrom = new Date("2026-06-15");
    p3.validTo = new Date("2026-08-01");
    p3.percentDiscount = 15;
    promotions.push(p1);
    promotions.push(p2);
    promotions.push(p3);
    return promotions;
  }
}
