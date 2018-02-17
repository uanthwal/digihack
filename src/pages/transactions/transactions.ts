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
  public showTransaction: boolean = false;

  public requestCount: number = 0;
  
  // Doughnut
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
    public doughnutChartLabelsC:string[] = [];
  public doughnutChartDataC:number[] = [];
    public doughnutChartLabelsD:string[] = [];
  public doughnutChartDataD:number[] = [];
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
          this.showTransaction = this.selectedTransictionDetails.transaction.length > 0;
          this.onTransactionTypeChange(this.transactionType);
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
    this.showTransaction = this.selectedTransictionDetails.transaction.length > 0;
  }

    // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public onTransactionTypeChange(trType: string) {
    switch (trType) {
      case 'credit':
      this.doughnutChartLabelsC = this.selectedTransictionDetails.transaction
                                    .filter(tranType => tranType.type == 'c')
                                    .map(tranCategory => tranCategory.category);
      this.doughnutChartDataC = []; 
            this.doughnutChartLabelsC.forEach(label => {
        let total = this.selectedTransictionDetails.transaction
                    .filter(tranType => tranType.category == label)
                    .reduce((a, b) => a + b.amount, 0);
                    this.doughnutChartDataC.push(total);
                    // label = label + '(' + total +  ')';
      });
      // hack
      // this.doughnutChartLabelsC = this.doughnutChartLabelsC.map((label, index) => label  + '(' + this.doughnutChartDataC[index] +  ')' );
      break;
      case 'debit':
      this.doughnutChartLabelsD = this.selectedTransictionDetails.transaction
                                    .filter(tranType => tranType.type == 'd')
                                    .map(tranCategory => tranCategory.category);
      this.doughnutChartDataD = []; 
      this.doughnutChartLabelsD.forEach(label => {
        let total = this.selectedTransictionDetails.transaction
                    .filter(tranType => tranType.category == label)
                    .reduce((a, b) => a + b.amount, 0);
                    this.doughnutChartDataD.push(total);
      });
// hack
      // this.doughnutChartLabelsD = this.doughnutChartLabelsD.map((label, index) => label  + '(' + this.doughnutChartDataD[index] +  ')' );
      break;
      default:
      this.doughnutChartLabels = ['Credit', 'Debit'];
      this.doughnutChartData = [];
      this.doughnutChartLabels.forEach(label => {
        let total = this.selectedTransictionDetails.transaction
                    .filter(tranType => tranType.category == label)
                    .reduce((a, b) => a + b.amount, 0);
                    this.doughnutChartData.push(total);
      });
// hack
      // this.doughnutChartLabels = this.doughnutChartLabels.map((label, index) => label  + '(' + this.doughnutChartData[index] +  ')' );
    }

    this.transactionType = trType;

  }

}
