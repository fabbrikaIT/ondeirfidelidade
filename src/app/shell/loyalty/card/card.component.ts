import { Component, OnInit, Injector } from '@angular/core';

import { LoyaltyEntity } from './../../../shared/models/loyalty/loyalty';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  loyalty: LoyaltyEntity;

  constructor(private injector: Injector) {
    this.loyalty = this.injector.get("loyalty");
  }

  ngOnInit() {
  }

}
