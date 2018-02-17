import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the SplitBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-split-bill-detail",
  templateUrl: "split-bill-detail.html"
})
export class SplitBillDetailPage {
  selectedBillers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SplitBillPage");
    this.selectedBillers = this.navParams.get('data');
    this.selectedBillers.forEach(i => {
        i.amountToPay = 0;
    });
  }

  splitBill(amount) {
      if(amount > 0) {
        let perHeadCost = (amount/this.selectedBillers.length);
        this.selectedBillers.forEach(i => {
            i.amountToPay = perHeadCost;
        });
      }
    
  }
}
