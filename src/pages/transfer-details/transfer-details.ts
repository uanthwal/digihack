import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { ViewEncapsulation } from "@angular/core";

/**
 * Generated class for the TransferDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transfer-details',
  templateUrl: 'transfer-details.html',
})
export class TransferDetailsPage {

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
