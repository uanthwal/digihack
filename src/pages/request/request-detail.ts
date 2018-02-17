import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URL_CONFIG } from '../../app/app.config';

@Component({
    selector: "page-request-detail",
    templateUrl: 'request-detail.html'
  })
  export class RequestDetailPage {
    iconPath = URL_CONFIG.ICON_ASSETS_PATH;
    sendToUserData;
    remarks;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
    ionViewDidLoad() {
      console.log("ionViewDidLoad TransferPage", this.navParams.get("navParams"));
      this.sendToUserData = this.navParams.get("navParams");
    }
  
    onClickRequest() {
  
    }
  }