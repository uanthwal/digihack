import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var require: any;

// let qrcode: any = require('../../assets/js/qrcode.min');

import * as QRCode from 'qrcode/build/qrcode';
/**
 * Generated class for the QrCodeReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qr-code-reader',
  templateUrl: 'qr-code-generator.html',
})
export class QrCodeGeneratorPage {


  @Input()
  qrValue: string= 'Praksh Gupta'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodeReaderPage');
    this.prepareQRCode();
  }


  prepareQRCode(){

    QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  }
}
