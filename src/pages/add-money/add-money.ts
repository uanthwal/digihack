/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2018-02-17 18:52:09 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2018-02-17 22:42:22
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the AddMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-money',
  templateUrl: 'add-money.html',
})
export class AddMoneyPage {

  public activeTab: any;

  public tabs = [
    { label: 'UPI', isActive: true, key: 'UPI' },
    { label: 'Debit Card', isActive: false, key: 'DEBIT' },
    { label: 'IFSC', isActive: false, key: 'IFSC' }
  ]; 

  public banks = [
    {icon: 'hdfc_logo.png', acc: 'XXXX XXXX 1508', bank: 'HDFC', isActive: true},
    {icon: 'icici_logo.png', acc: 'XXXX XXXX 1552', bank: 'ICICI', isActive: false},
    {icon: 'sbi_logo.png', acc: 'XXXX XXXX 1512', bank: 'SBI', isActive: false}
  ];

  constructor(public navCtrl: NavController) {
    this.activeTab = this.deepClone(this.tabs[0]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMoneyPage');
  }

  activate( tab ) {
    this.activeTab = tab;
    const index = this.tabs.indexOf(tab);
    this.tabs.forEach(t => t.isActive = false);
    this.tabs[index].isActive = true;
  }

  choose( bank ) {
    const index = this.banks.indexOf(bank);
    this.banks.forEach(t => t.isActive = false);
    this.banks[index].isActive = true;
  }

  deepClone( obj ) {
    return JSON.parse(JSON.stringify(obj));
  }
}