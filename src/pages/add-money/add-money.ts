/*
 * @Author: Rajkeshwar Prasad (rajkeshwar.pd@gmail.com) 
 * @Date: 2018-02-17 18:52:09 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2018-02-17 21:25:32
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
    {icon: '', acc: 'xxxxxxxxxx1230', bank: 'HDFC'},
    {icon: '', acc: 'xxxxxxxxxx1405', bank: 'ICICI'},
    {icon: '', acc: 'xxxxxxxxxx1512', bank: 'SBI'},
    {icon: '', acc: 'xxxxxxxxxx8877', bank: 'PNB'},
    {icon: '', acc: 'xxxxxxxxxx8967', bank: 'KOTAK'},
    {icon: '', acc: 'xxxxxxxxxx2390', bank: 'BOI'}
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

  deepClone( obj ) {
    return JSON.parse(JSON.stringify(obj));
  }
}