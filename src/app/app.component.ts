import { DashboardPage } from './../pages/dashboard/dashboard';
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { URL_CONFIG } from "./app.config";
import { IntroSliderPage } from "../pages/intro-slider/intro-slider";
import { HomePage } from '../pages/home/home';
import { RemindersPage } from '../pages/reminders/reminders';
import { TransferPage } from '../pages/transfer/transfer';
import { RequestPage } from '../pages/request/request';
import { SplitBillPage } from '../pages/split-bill/split-bill';

import { TransactionsPage } from '../pages/transactions/transactions';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  // rootPage: any = IntroSliderPage;
  rootPage: any = TransactionsPage;

  pages: Array<{ title: string; component: any; icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }
}
