import { URL_CONFIG } from './../../app/app.config';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {

  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;

  public rechargeType = 'prepaid';
  public offersType = 'recent';
  public recharges: any = [];
  public offers: any = [];
  
  constructor(public navCtrl: NavController, private http: Http) {
  }

  ionViewDidLoad() {
    this.http.get('assets/data/recharge-data.json')
    .map(resp => resp.json())
    .subscribe(resp => {
      this.recharges = resp.recharge;
      this.offers = resp.offers;
    });
  }

  

}
