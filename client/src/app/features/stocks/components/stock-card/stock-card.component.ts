import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { Stock } from '../../interfaces/stock';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockCardComponent {
  @Input() stock: Stock | null = null
}
