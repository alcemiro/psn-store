import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent,
            CardPricingComponent
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameLabel:string = ""
  @Input()
  gameCover:string = ""

  @Input()
  gameType: string ="digitalOne"
  @Input()
  gamePrice: string= "R$ 399,99"

  constructor(){}

  ngOnInit(): void {
      
  }
 
}
