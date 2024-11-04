import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit{

  @Input()
  gameType: string ="digitalOne"
  @Input()
  gamePrice: string= "R$ 399,99"

  constructor(){}

  ngOnInit(): void {
      
  }

}
