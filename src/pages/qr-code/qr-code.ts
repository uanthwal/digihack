import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { QrCodeGeneratorPage  } from '../qr-code-generator/qr-code-generator';

import { QrCodeScannerPage } from '../qr-code-scanner/qr-code-scanner';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {

  public tab1: any;
  public tab2: any;
  public tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = QrCodeScannerPage;
    this.tab2 = QrCodeGeneratorPage;
  }

  public tabMenus = [
    { label: 'QR Reader', icon: 'water', page: QrCodeScannerPage },
    { label: 'My QR code', icon: 'water', page: QrCodeGeneratorPage },  
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }

}
