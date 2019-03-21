import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()

export class BillService extends BaseApi{
 constructor(public http: Http) {
     super(http);
 }

    getBill(): Observable<Bill> {
      return this.get('bill');
    }
    updateBill(bill: Bill): Observable<Bill> {
      return this.put('bill', bill);
    }
 getCurrency(/*base: string = ' UAH'*/): Observable<any> {
     return this.http.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`)
     .map((response: Response) => response.json());
 }
}






