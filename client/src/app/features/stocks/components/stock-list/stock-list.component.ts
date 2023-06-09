import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { Stock, StockResponse } from '@features/stocks/interfaces/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListComponent implements OnInit {

  stocks$!: Observable<Stock[]>;

  constructor(private stockService: StockService) {

  }

  ngOnInit(): void {
    this.stocks$ = this.stockService.getAll().pipe(map((res: StockResponse) => res.stocks));
  }
}
