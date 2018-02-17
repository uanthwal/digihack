import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DealsPage } from '../deals/deals';
import { LoginPage } from '../login/login';
import { URL_CONFIG } from '../../app/app.config';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  public tab1;
  public tab2;
  public rootPage: any = MyAccountPage;
  constructor(public navCtrl: NavController) {
    this.tab1 = DealsPage;
    this.tab2 = LoginPage;
  }

  ionViewDidLoad() {
    // this.navCtrl.setRoot(HomePage);
  }

  detailsPage(detailsPage) {
    this.navCtrl.push(detailsPage);
  }

  logout() {
    this.rootPage = LoginPage;
  }
}
