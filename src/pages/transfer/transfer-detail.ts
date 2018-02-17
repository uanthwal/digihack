import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { ViewEncapsulation } from "@angular/core";

@Component({
    selector: "page-transfer-detail",
    templateUrl: 'transfer-detail.html'
  })
  export class TransferDetailPage {
    iconPath = URL_CONFIG.ICON_ASSETS_PATH;
    sendToUserData;
    remarks;
  
  
    public banks = [
      {icon: 'hdfc_logo.png', acc: 'XXXX XXXX 1508', bank: 'HDFC', isActive: true},
      {icon: 'icici_logo.png', acc: 'XXXX XXXX 1552', bank: 'ICICI', isActive: false},
      {icon: 'sbi_logo.png', acc: 'XXXX XXXX 1512', bank: 'SBI', isActive: false}
    ];
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
    ionViewDidLoad() {
      console.log("ionViewDidLoad TransferPage", this.navParams.get("navParams"));
      this.sendToUserData = this.navParams.get("navParams");
    }
  
    choose( bank ) {
      const index = this.banks.indexOf(bank);
      this.banks.forEach(t => t.isActive = false);
      this.banks[index].isActive = true;
    }
  
    onClickTransfer() {
  
    }
  }
  