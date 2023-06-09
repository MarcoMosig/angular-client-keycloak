import { Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Stock } from '../../interfaces/stock';
import { FinvestCardFace } from './card.types';

@Component({
  selector: 'finvest-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockCardComponent implements OnChanges {
  @Input() stock: Stock | null = null
  @Input() expanded: boolean = false;
  @Input() face: FinvestCardFace = 'front';
  @Input() flippable: boolean = false;

  @HostBinding('class') get classList(): any {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      'finvest-card-expanded': this.expanded,
      'finvest-card-face-back': this.flippable && this.face === 'back',
      'finvest-card-face-front': this.flippable && this.face === 'front',
      'finvest-card-flippable': this.flippable
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Expanded
    if ('expanded' in changes) {
      // Coerce the value to a boolean
      this.expanded = coerceBooleanProperty(changes['expanded'].currentValue);
    }

    // Flippable
    if ('flippable' in changes) {
      // Coerce the value to a boolean
      this.flippable = coerceBooleanProperty(changes['flippable'].currentValue);
    }
  }
}
