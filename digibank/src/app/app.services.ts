/*
 * @Author: Upendra <uanthwal@gmail.com> 
 * @Date: 2017-06-15 15:01:38 
 * @Last Modified by: Upendra
 * @Last Modified time: 2017-06-29 18:55:04
 */
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClientService } from '../shared/http/base.http.service';
import { Broadcaster } from '../service/broadcaster';
import { URL_CONFIG } from './app.config';

@Injectable()
export class AppService {
    Person: string;
    constructor(
        public httpClient: HttpClientService,
        public broadcaster: Broadcaster) { }

    register(data): Observable<any> {
        return this.httpClient.post(URL_CONFIG.REGISTER_URL, data)
            .map(res => res.json());
    }

    login(data): Observable<any> {
        return this.httpClient.post(URL_CONFIG.LOGIN_URL, data)
            .map(res => res.json());
    }

}