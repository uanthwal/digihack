import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { ViewEncapsulation } from "@angular/core";
import { Http } from '@angular/http';
import { TransferDetailsPage } from '../transfer-details/transfer-details';
/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-transfer",
  templateUrl: "transfer.html"
})
export class TransferPage {
  iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  transfermode = "upi_id";

  UPIList = [];
  contactList = [];
  bankAccountList = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private http: Http) {
   
  }

  ionViewDidLoad() {

    this.http.get('assets/data/transfer-data.json')
      .map(resp => resp.json())
      .subscribe(resp => {
        this.UPIList = resp.upiList;
        this.bankAccountList = resp.bankAccountList;
        this.contactList = resp.contactList;

        this.UPIList = this.UPIList.map((ul: any) => {
          ul.icon = 'avtr--' + Math.floor(Math.random() * 215);
          return ul;
        });

        this.contactList = this.contactList.map((ul: any) => {
          ul.icon = 'avtr--' + Math.floor(Math.random() * 215);
          return ul;
        });

      });
  }

  onClickCard(data) {
    this.navCtrl.push(TransferDetailsPage, { navParams: data });
  }
}
