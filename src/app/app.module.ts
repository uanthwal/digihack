import { DashboardPage } from '../pages/dashboard/dashboard';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyAccountPage } from '../pages/my-account/my-account';
import { MutualFundsPage } from './../pages/mutual-funds/mutual-funds';
import { RequestPage } from '../pages/request/request';
import { PayBillsPage } from '../pages/pay-bills/pay-bills';
import { AddMoneyPage } from '../pages/add-money/add-money';
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { AppService } from "./app.services";
import { HttpClientService } from "../shared/http/base.http.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ChartsModule } from 'ng2-charts';

import { Broadcaster } from "../service/broadcaster";
import { LogoutPage } from "../pages/logout/logout";
import { IntroSliderPage } from "../pages/intro-slider/intro-slider";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TransferPage, TransferDetailPage } from '../pages/transfer/transfer';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { DealsPage } from '../pages/deals/deals';
import { RechargePage } from '../pages/recharge/recharge';
import { PayeesPage } from '../pages/payees/payees';
import { NewDepositPage } from '../pages/new-deposit/new-deposit';
import { RemindersPage, AddNewRemindersPage } from '../pages/reminders/reminders';
import { TransactionsPage } from '../pages/transactions/transactions';
import { ChatBotPage } from '../pages/chat-bot/chat-bot';
import { InviteAndEarnPage } from '../pages/invite-and-earn/invite-and-earn';
import { PipesModule } from '../pipes/pipes.module';

import { QrCodeGeneratorPage  } from '../pages/qr-code-generator/qr-code-generator';
import { QrCodeScannerPage } from '../pages/qr-code-scanner/qr-code-scanner';
import { TransactionSummaryService } from '../service/transaction-summary-service';

import { QRScanner } from '@ionic-native/qr-scanner';
import { QRCodeModule } from 'angular2-qrcode';


const PAGES = [
  MyApp, HomePage, LoginPage, LogoutPage, IntroSliderPage,
  AddMoneyPage, TransferPage, QrCodePage, DealsPage, PayBillsPage,
  RechargePage, RequestPage, PayeesPage, MutualFundsPage, 
  NewDepositPage, RemindersPage, MyAccountPage, TransactionsPage,
  ChatBotPage, InviteAndEarnPage, NotificationsPage, DashboardPage,
  AddNewRemindersPage, TransferDetailPage
  QrCodeGeneratorPage, QrCodeScannerPage
];
@NgModule({
  declarations: PAGES,
  imports: [
    IonicModule.forRoot(MyApp),
    PipesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ChartsModule,
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: PAGES,
  providers: [
    TransactionSummaryService,
    Broadcaster,
    HttpClientService,
    AppService,
    EmailComposer,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QRScanner
  ]
})
export class AppModule {}
