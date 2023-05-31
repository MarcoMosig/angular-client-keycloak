import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  stocks?: Stock[]

  constructor(private stockService: StockService) {
  }
  ngOnInit() {
    this.stockService.findAll().subscribe(data => {
      this.stocks = data;
      console.log(this.stocks);
    });
  }
}
