import { TransferPage } from "./../transfer/transfer";
import { AddMoneyPage } from "./../add-money/add-money";
import { ChatBotPage } from "./../chat-bot/chat-bot";
import { TransactionsPage } from "./../transactions/transactions";
import { RequestPage } from "./../request/request";
import { RechargePage } from "./../recharge/recharge";
import { QrCodePage } from "./../qr-code/qr-code";
import {
  Component,
  ViewChild,
  trigger,
  transition,
  style,
  state,
  animate,
  keyframes,
  ChangeDetectorRef
} from "@angular/core";
import { NavController, Slides } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { LoginPage } from "../login/login";
import { DealsPage } from "../deals/deals";
import { PayBillsPage } from "../pay-bills/pay-bills";
import { PayeesPage } from "../payees/payees";
import { MutualFundsPage } from "../mutual-funds/mutual-funds";
import { NewDepositPage } from "../new-deposit/new-deposit";
import { RemindersPage } from "../reminders/reminders";
import { MyAccountPage } from "../my-account/my-account";
import { TransactionSummaryPage } from "../transaction-summary/transaction-summary";
import { SplitBillPage } from "../split-bill/split-bill";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("bounce", [
      state(
        "*",
        style({
          transform: "translateX(0)"
        })
      ),
      transition(
        "* => rightSwipe",
        animate(
          "700ms ease-out",
          keyframes([
            style({ transform: "translateX(0)", offset: 0 }),
            style({ transform: "translateX(-65px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1 })
          ])
        )
      ),
      transition(
        "* => leftSwipe",
        animate(
          "700ms ease-out",
          keyframes([
            style({ transform: "translateX(0)", offset: 0 }),
            style({ transform: "translateX(65px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  public rootPage = LoginPage;
  public limit = 6;
  public isViewAll = false;

  public categories = [
    { label: "Add Money", page: AddMoneyPage, icon: "add-money.png" },
    { label: "Transfer", page: TransferPage, icon: "transfers.png" },
    { label: "Request", page: RequestPage, icon: "request-money.png" },
    { label: "Reminders", page: RemindersPage, icon: "reminders.png" },
    { label: "Split Bill", page: SplitBillPage, icon: "split-bill.png" },
    { label: "QR Code", page: QrCodePage, icon: "qr-code.png" },
    { label: "Deals", page: DealsPage, icon: "deals.png" },
    { label: "Pay Bills", page: PayBillsPage, icon: "pay-bills.png" },
    { label: "Recharge", page: RechargePage, icon: "recharge.png" },
    { label: "Payees", page: PayeesPage, icon: "payees.png" },
    { label: "Mutual Funds", page: MutualFundsPage, icon: "mutual-funds.png" },
    { label: "New Deposits", page: NewDepositPage, icon: "deposits.png" }
  ];
  state: string = "x";
  constructor(public navCtrl: NavController, private cdRef: ChangeDetectorRef) {
    this.limit = 8;
  }

  public ionViewDidLoad() {
    // this.navCtrl.setRoot(HomePage);
  }

  public toggleView() {
    this.isViewAll = !this.isViewAll;
    this.limit = this.isViewAll ? this.categories.length : 8;
  }

  public detailsPage(page) {
    this.navCtrl.push(page);
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = "rightSwipe";
    else this.state = "leftSwipe";
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  animationDone() {
    this.state = "x";
    this.ngAfterViewChecked();
  }

}
