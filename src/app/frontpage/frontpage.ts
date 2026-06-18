import { Component } from '@angular/core';
import { FacilityCard } from '../facility/facility';
import { PromotionCard } from "../promotion/promotion";

@Component({
  selector: 'app-frontpage',
  imports: [FacilityCard, PromotionCard],
  templateUrl: './frontpage.html',
  styleUrl: './frontpage.css',
})
export class Frontpage {

}
