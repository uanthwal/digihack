import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpClientService } from "../../shared/http/base.http.service";
import { AppService } from "../../app/app.services";
import { URL_CONFIG } from "../../app/app.config";

import { TransactionSummaryService } from '../../service/transaction-summary-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "transaction-summary",
  templateUrl: "transaction-summary.html"
})
export class TransactionSummaryPage {
  public iconPath = URL_CONFIG.IMG_ASSETS_PATH;
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tsService: TransactionSummaryService
  ) {}

  ionViewDidLoad() {
      this.tsService.fetchAllTransaction().subscribe((response: any[]) => {
          console.log("TR Res", response);
      });
  }

    // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
