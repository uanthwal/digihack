import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpClientService } from "../../shared/http/base.http.service";
import { AppService } from "../../app/app.services";
import { URL_CONFIG } from "../../app/app.config";
import { DashboardPage } from "../dashboard/dashboard";
import { ToastController } from "ionic-angular/components/toast/toast-controller";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public iconPath = URL_CONFIG.IMG_ASSETS_PATH;
  public userId: String;
  public password: String;
  constructor(
    public appService: AppService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClientService,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  signUp() {
    // this.navCtrl.push(SignupPage);
  }

  doLogin() {
    let data = {
      userId: this.userId,
      password: this.password
    };
    // this.appService.login(data)
    // .subscribe((resp) => {
    //   // Response from Login Server
    // });
    if (this.userId == "digihack" && this.password == "digihack") {
      this.navCtrl.push(DashboardPage);
    } else {
      let toast = this.toastCtrl.create({
        message: "User Id or Password incorrect!",
        duration: 3000
      });
      toast.present();
    }
    // this.nav.setRoot(page.component);
  }
}
