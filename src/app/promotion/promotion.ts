import { Component, inject, OnInit } from '@angular/core';
import { Promotion } from '../models/promotion';
import { PromotionService } from '../services/promotion-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-promotion',
  imports: [DatePipe],
  templateUrl: './promotion.html',
  styleUrl: './promotion.css',
})
export class PromotionCard implements OnInit{
  private service = inject(PromotionService)
  current_promotion : Promotion[] = [];
  ngOnInit(): void {
    this.current_promotion = this.service.getTopPromotions();
  }
}
