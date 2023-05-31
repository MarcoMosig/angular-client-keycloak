import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../models/stock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  stocks$!: Observable<Stock[]>;

  constructor(private stockService: StockService) {
  }
  ngOnInit() {
    this.stocks$ = this.stockService.findAll();

    this.stockService.findAll().subscribe(result => console.log(result));
  }
}
