import { Component } from "@angular/core";
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from "ionic-angular";
import { HttpClientService } from "../../shared/http/base.http.service";
import { AppService } from "../../app/app.services";
import { URL_CONFIG } from "../../app/app.config";

import { TransactionSummaryService } from '../../service/transaction-summary-service';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
public userTransactionDetails: any;

  public transactionType: string = 'all';
  public selectedAccount: any;
  public selectedTransictionDetails: any = {};

  public allAccount: any[];

  public requestCount: number = 0;

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tsService: TransactionSummaryService,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
      this.requestCount++;
      this.tsService.fetchAllTransaction().subscribe((response: any[]) => {
          this.userTransactionDetails = response;
          this.allAccount = this.userTransactionDetails.map(acc => acc.accountnumber);
          this.selectedAccount = this.allAccount[0];
          this.selectedTransictionDetails = JSON.parse(JSON.stringify(this.userTransactionDetails[0]));
          this.requestCount--;
          
      });
      this.presentLoading();      
  }

    private presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 100
    });
    loader.present();
  }

  public accountChange(valueChange) {
    console.log("valueChange",valueChange);
    let acc = this.userTransactionDetails.find(account => account.accountnumber == valueChange);
    this.selectedTransictionDetails = JSON.parse(JSON.stringify(acc));
  }

    // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
