import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';

import { LoyaltyEntity } from './../../../shared/models/loyalty/loyalty';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('container') div: ElementRef;

  loyalty: LoyaltyEntity;
  pointsBox: Array<number>;
  boxWidth: number = 0;

  constructor(private injector: Injector) {
    this.loyalty = this.injector.get("loyalty");
  }

  ngOnInit() {
    this.createBoxes();
  }

  createBoxes() {
    console.log();

    this.pointsBox = new Array<number>();

    for (let i = 0; i < this.loyalty.usageType.usageGoal; i++) {
      this.pointsBox.push(i);
    }

    if (this.loyalty.usageType.usageGoal > 6) {
      this.boxWidth = (this.div.nativeElement.offsetWidth - 30) / 6;
    } else {
      this.boxWidth = (this.div.nativeElement.offsetWidth - 30) / this.loyalty.usageType.usageGoal;
    }
  }
}
