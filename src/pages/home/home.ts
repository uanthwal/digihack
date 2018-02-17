import { ChatBotPage } from './../chat-bot/chat-bot';
import { TransactionsPage } from './../transactions/transactions';
import { RequestPage } from './../request/request';
import { RechargePage } from './../recharge/recharge';
import { QrCodePage } from './../qr-code/qr-code';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { LoginPage } from "../login/login";
import { AddMoneyPage } from '../add-money/add-money';
import { TransferPage } from '../transfer/transfer';
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
  public tab1;
  public tab2;
  public rootPage = LoginPage;

  public categories = [
    { label: 'Add Money', page: AddMoneyPage, icon: 'add-money.png' },
    { label: 'Transfer', page: TransferPage, icon: 'transfers.png' },
    { label: 'QR Code', page: QrCodePage, icon: 'qr-code.png' },
    { label: 'Deals', page: DealsPage, icon: 'deals.png' },
    { label: 'Pay Bills', page: PayBillsPage, icon: 'pay-bills.png' },
    { label: 'Recharge', page: RechargePage, icon: 'recharge.png' },
    { label: 'Request', page: RequestPage, icon: 'request-money.png' },
    { label: 'Payees', page: PayeesPage, icon: 'payees.png' },
    { label: 'Mutual Funds', page: MutualFundsPage, icon: 'mutual-funds.png' },
    { label: 'New Deposits', page: NewDepositPage, icon: 'deposits.png' },
    { label: 'Reminders', page: RemindersPage, icon: 'reminders.png' }
  ];

  // public tabMenus = [
  //   { label: 'Offers', page: DealsPage },
  //   { label: 'My Account', page: MyAccountPage },
  //   { label: 'Home', page: HomePage },
  //   { label: 'Transactions', page: TransactionsPage },
  //   { label: 'Chat', page: ChatBotPage }    
  // ];

  constructor(public navCtrl: NavController) {
    this.tab1 = LoginPage;
    this.tab2 = LoginPage;
  }

  public ionViewDidLoad() {
    // this.navCtrl.setRoot(HomePage);
  }

  public detailsPage(page) {
    this.navCtrl.push(page);
  }

  public setPage( thePage ) {
    console.log('Setting page: ', thePage);
    this.rootPage = thePage;
  }
}
