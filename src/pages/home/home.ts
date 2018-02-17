import { TransferPage } from './../transfer/transfer';
import { AddMoneyPage } from './../add-money/add-money';
import { ChatBotPage } from './../chat-bot/chat-bot';
import { TransactionsPage } from './../transactions/transactions';
import { RequestPage } from './../request/request';
import { RechargePage } from './../recharge/recharge';
import { QrCodePage } from './../qr-code/qr-code';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { LoginPage } from "../login/login";
import { DealsPage } from '../deals/deals';
import { PayBillsPage } from '../pay-bills/pay-bills';
import { PayeesPage } from '../payees/payees';
import { MutualFundsPage } from '../mutual-funds/mutual-funds';
import { NewDepositPage } from '../new-deposit/new-deposit';
import { RemindersPage } from '../reminders/reminders';
import { MyAccountPage } from '../my-account/my-account';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  public rootPage = LoginPage;
  public limit = 6;
  public isViewAll = false;

  public categories = [
    { label: 'Add Money', page: AddMoneyPage },
    { label: 'Transfer', page: TransferPage },
    { label: 'QR Code', page: QrCodePage },
    { label: 'Deals', page: DealsPage },
    { label: 'Pay Bills', page: PayBillsPage },
    { label: 'Recharge', page: RechargePage },
    { label: 'Request', page: RequestPage },
    { label: 'Payees', page: PayeesPage },
    { label: 'Mutual Funds', page: MutualFundsPage },
    { label: 'New Deposits', page: NewDepositPage },
    { label: 'Reminders', page: RemindersPage }
  ];

  constructor(public navCtrl: NavController) {
    this.limit = 6;
  }

  public ionViewDidLoad() {
    // this.navCtrl.setRoot(HomePage);
  }

  public toggleView() {
    this.isViewAll = !this.isViewAll;
    this.limit = this.isViewAll ? this.categories.length : 6;
  }

  public detailsPage(page) {
    this.navCtrl.push(page);
  }
}
