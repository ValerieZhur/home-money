import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wfm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit{
  @Input() currency: any;
  date = new Date();
  usd: number;
  eur: number;
  currencies: string[] = ['USD', 'EUR'];
  ngOnInit() {
    const courses = this.currency;
    this.usd = 1 / courses[0]['buy'];
    this.eur = 1 / courses[1]['buy'];

  }


}
