import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { URL_CONFIG } from "../../app/app.config";

import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable()
export class HttpClientService {
  constructor(private http: Http) {}

  get(url: string) {
    return this.http.get(URL_CONFIG.BASE_URL + url).do(_ => {});
  }

  post(url: string, data: any) {
    let headers = new Headers({ "content-type": "application/json" });

    let options = new RequestOptions({ headers: headers });
    return this.http.post(URL_CONFIG.BASE_URL + url, data, options).do(_ => {});
  }

  put(url: string, data: any) {
    return this.http.put(URL_CONFIG.BASE_URL + url, data).do(_ => {});
  }

  delete(url: string, data: any) {
    let headers = new Headers({ "content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(URL_CONFIG.BASE_URL + url, options).do(_ => {});
  }

  getHamBurger(url: string) {
    return this.http.get(url);
  }
}
