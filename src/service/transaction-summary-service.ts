import {Injectable} from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import {Http, Headers} from '@angular/http';

@Injectable()
export class TransactionSummaryService {

constructor(private http: Http) {}

public fetchAllTransaction() {
      let headers = new Headers();
    return this.http.get('./assets/json/transaction-summary.json', {headers: headers}).delay(1000).map(response => response.json());
}
}
