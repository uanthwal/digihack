/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2018-02-17 15:05:40 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2018-02-18 02:56:06
 */
import { ChatBotPage } from './../chat-bot/chat-bot';
import { TransactionsPage } from './../transactions/transactions';
import { MyAccountPage } from './../my-account/my-account';
import { QrCodePage } from './../qr-code/qr-code';
import { AddMoneyPage } from './../add-money/add-money';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';
import { DealsPage } from '../deals/deals';
import { HomePage } from '../home/home';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {
  }

  public tabMenus = [
    { label: 'Offers', icon: 'water', page: DealsPage },
    { label: 'My Account', icon: 'water', page: MyAccountPage },
    { label: 'Home', icon: 'water', page: HomePage },
    { label: 'Transactions', icon: 'water', page: TransactionsPage },
    { label: 'Chat', icon: 'water', page: ChatBotPage }    
  ];
}
