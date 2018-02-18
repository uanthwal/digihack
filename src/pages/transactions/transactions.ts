import { Component } from "@angular/core";
import { LoadingController } from "ionic-angular";
import { NavController, NavParams } from "ionic-angular";
import { HttpClientService } from "../../shared/http/base.http.service";
import { AppService } from "../../app/app.services";
import { URL_CONFIG } from "../../app/app.config";

import { TransactionSummaryService } from "../../service/transaction-summary-service";

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-transactions",
  templateUrl: "transactions.html"
})
export class TransactionsPage {
  public userTransactionDetails: any;

  public transactionType: string = "all";
  public filterTransaction = [];
  public selectedAccount: any;
  public selectedTransictionDetails: any = {};

  public allAccount: any[];
  public showTransaction: boolean = false;

  public requestCount: number = 0;

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartLabelsC: string[] = [];
  public doughnutChartDataC: number[] = [];
  public doughnutChartLabelsD: string[] = [];
  public doughnutChartDataD: number[] = [];
  public doughnutChartType: string = "doughnut";

  public dateFormat = "MMM DD YYYY";
  public today = new Date();
  public filterdate = {
    to: [
      this.formatDate(this.today.getFullYear()),
      this.formatDate(this.today.getMonth() + 1),
      this.formatDate(this.today.getDate())
    ].join("-"),
    from: [
      this.formatDate(this.today.getFullYear()),
      this.formatDate(this.today.getMonth()),
      this.formatDate(this.today.getDate())
    ].join("-")
  };
  // this.today.setMonth(this.toDate.getMonth() - 1)
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
      this.allAccount = this.userTransactionDetails.map(
        acc => acc.accountnumber
      );
      this.selectedAccount = this.allAccount[0];
      this.selectedTransictionDetails = JSON.parse(
        JSON.stringify(this.userTransactionDetails[0])
      );
      this.filterTransaction = this.doFilterDateTr(
        this.selectedTransictionDetails.transaction
      );
      this.showTransaction = this.filterTransaction.length > 0;
      this.onTransactionTypeChange(this.transactionType);
      this.requestCount--;
    });
    this.presentLoading();
  }

  public applyFilter() {
    this.filterTransaction = this.doFilterDateTr(this.filterTransaction);
    this.showTransaction = this.filterTransaction.length > 0;
  }

  public getTran() {
    let result;
    if (this.transactionType == "all") {
      result = this.filterTransaction;
    } else {
      if (this.transactionType == "Credit") {
        result = this.filterTransaction.filter(tr => tr.type == "Credit");
      } else {
        result = this.filterTransaction.filter(tr => tr.type == "Debit");
      }
    }
    return result;
  }
  private doFilterDateTr(tranData: any[]): any[] {
    let todate = new Date(this.filterdate.to).getTime();
    let fromdate = new Date(this.filterdate.from).getTime();
    let result: any[] = this.selectedTransictionDetails.transaction
      .filter(tran => tran.transactionDate >= fromdate)
      .filter(tran2 => tran2.transactionDate <= todate);
    return JSON.parse(JSON.stringify(result));
  }

  private formatDate(value) {
    if (parseInt(value) < 10) {
      return "0" + value;
    }
    return value;
  }
  private presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 100
    });
    loader.present();
  }

  public accountChange(valueChange) {
    console.log("valueChange", valueChange);
    let acc = this.userTransactionDetails.find(
      account => account.accountnumber == valueChange
    );
    this.selectedTransictionDetails = JSON.parse(JSON.stringify(acc));
    this.filterTransaction = this.doFilterDateTr(
      this.selectedTransictionDetails.transaction
    );
    this.showTransaction = this.filterTransaction.length > 0;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public onTransactionTypeChange(trType: string) {
    switch (trType) {
      case "Credit":
        this.doughnutChartLabelsC = this.filterTransaction
          .filter(tranType => tranType.type == "Credit")
          .map(tranCategory => tranCategory.category);
        this.doughnutChartDataC = [];
        this.doughnutChartLabelsC = this.removeDuplicates(
          this.doughnutChartLabelsC
        );
        this.doughnutChartLabelsC.forEach(label => {
          let total = this.filterTransaction
            .filter(tranType => tranType.category == label)
            .reduce((a, b) => a + b.amount, 0);
          this.doughnutChartDataC.push(total);
          // label = label + '(' + total +  ')';
        });
      // hack
      // this.doughnutChartLabelsC = this.doughnutChartLabelsC.map((label, index) => label  + '(' + this.doughnutChartDataC[index] +  ')' );
      // break;
      case "Debit":
        this.doughnutChartLabelsD = this.filterTransaction
          .filter(tranType => tranType.type == "Debit")
          .map(tranCategory => tranCategory.category);
        this.doughnutChartLabelsD = this.removeDuplicates(
          this.doughnutChartLabelsD
        );
        this.doughnutChartDataD = [];
        this.doughnutChartLabelsD.forEach(label => {
          let total = this.filterTransaction
            .filter(tranType => tranType.category == label)
            .reduce((a, b) => a + b.amount, 0);
          this.doughnutChartDataD.push(total);
        });
      // hack
      // this.doughnutChartLabelsD = this.doughnutChartLabelsD.map((label, index) => label  + '(' + this.doughnutChartDataD[index] +  ')' );
      // break;
      default:
        this.doughnutChartLabels = ["Credit", "Debit"];
        this.doughnutChartData = [];

        ["Credit", "Debit"].forEach(label => {
          let total = this.filterTransaction
            .filter(tranType => tranType.type == label)
            .reduce((a, b) => a + b.amount, 0);
          this.doughnutChartData.push(total);
        });
      // hack
      // this.doughnutChartLabels = this.doughnutChartLabels.map((label, index) => label  + '(' + this.doughnutChartData[index] +  ')' );
    }

    this.transactionType = trType;
  }

  private removeDuplicates(arr) {
    let unique_array = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) == -1) {
        unique_array.push(arr[i]);
      }
    }
    return unique_array;
  }
}
