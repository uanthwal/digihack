import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpClientService } from "../../shared/http/base.http.service";
import { AppService } from "../../app/app.services";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-logout",
  templateUrl: "logout.html"
})
export class LogoutPage {
  userId: String;
  password: String;
  constructor(
    public loadingCtrl: LoadingController,
    public appService: AppService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClientService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LogoutPage");
    this.doLogout();
  }

  private doLogout() {
    let data = {
      userId: this.userId,
      password: this.password
    };
    // this.appService.login(data)
    // .subscribe((resp) => {
    //   // Response from Login Server
    // });
    //this.navCtrl.push(LoginPage);
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      // this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
      // this.navCtrl.setRoot(LoginPage);
    }, 5000);
  }
}
