import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  public tab1;
  public tab2;
  rootPage = LoginPage;
  constructor(public navCtrl: NavController) {
    this.tab1 = LoginPage;
    this.tab2 = LoginPage;
  }

  ionViewDidLoad() {
    // this.navCtrl.setRoot(HomePage);
  }

  detailsPage(detailsPage) {
    this.navCtrl.push(detailsPage);
  }
}
