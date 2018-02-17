import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URL_CONFIG } from '../../app/app.config';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  requestmode = 'upi_id';
  UPIList = [
    {
      initials: "UA",
      name: "Upendra Anthwal",
      upi_add: "upendra@dbs",
      type: "upi_id"
    },
    {
      initials: "RP",
      name: "Rajkeshwar Prasad",
      upi_add: "rajkeshwar@dbs",
      type: "upi_id"
    },
    {
      initials: "PG",
      name: "Prakash Gupta",
      upi_add: "prakash@paytm",
      type: "upi_id"
    },
    {
      initials: "HK",
      name: "Himanshu Kesarwani",
      upi_add: "himan@icici",
      type: "upi_id"
    },
    {
      initials: "VD",
      name: "Venkat Dongala",
      upi_add: "venkat@ybl",
      type: "upi_id"
    },
    { initials: "JS", name: "Jay Shah", upi_add: "jay@icici", type: "upi_id" },
    {
      initials: "RS",
      name: "Rahul Singh",
      upi_add: "rahul@upi",
      type: "upi_id"
    },
    {
      initials: "VS",
      name: "Varun Sharma",
      upi_add: "varun@dbs",
      type: "upi_id"
    }
  ];
  contactList = [
    {
      initials: "RP",
      name: "Rajkeshwar Prasad",
      contact_number: "7004567894",
      type: "contact"
    },
    {
      initials: "UA",
      name: "Upendra Anthwal",
      contact_number: "8886389997",
      type: "contact"
    },
    {
      initials: "PG",
      name: "Prakash Gupta",
      contact_number: "8886299905",
      type: "contact"
    },
    {
      initials: "HK",
      name: "Himanshu Kesarwani",
      contact_number: "9789568914",
      type: "contact"
    },
    {
      initials: "JS",
      name: "Jay Shah",
      contact_number: "901288730",
      type: "contact"
    },
    {
      initials: "RS",
      name: "Rahul Singh",
      contact_number: "9627517697",
      type: "contact"
    },
    {
      initials: "VD",
      name: "Venkat Dongala",
      contact_number: "9675258965",
      type: "contact"
    },
    {
      initials: "VS",
      name: "Varun Sharma",
      contact_number: "9675000245",
      type: "contact"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  onClickCard(data) {
    this.navCtrl.push(RequestDetailPage, { navParams: data });
  }
}


@Component({
  selector: "page-request-detail",
  template: `<!--
  Generated template for the RemindersPage page.

  See http://ionicframework.com/docs/components/#navigation for more info on
  Ionic pages and navigation.
-->
<ion-header>

  <ion-navbar>
    <ion-title>Request Money</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>
<div class="block">
<div class="user-info" *ngIf="sendToUserData?.type == 'upi_id'">
<span class="name-icon">{{sendToUserData?.initials}}</span>
<div class="name">
  <p class="c-name">{{sendToUserData?.name}}</p>
  <p class="c-num">{{sendToUserData?.upi_add}}</p>
</div>
</div>  
    
  </div>
  <div class="block">
<div class="user-info" *ngIf="sendToUserData?.type == 'contact'">
<span class="name-icon">{{sendToUserData?.initials}}</span>
<div class="name">
  <p class="c-name">{{sendToUserData?.name}}</p>
  <p class="c-num">{{sendToUserData?.contact_number}}</p>
</div>
</div>  
  </div>
  
  <div class="block">
    <i class="fa fa-inr fa-icon"></i>
    <input class="amt-input" type="number" placeholder="Enter Amount" [(ngModel)]="amount"/>
  </div>
   
  <div class="block">
    <textarea id="remarks" [(ngModel)]="remarks">Remarks (optional) </textarea>
  </div>
  <ion-footer>
         <button ion-button round (click)="onClickRequest()">REQUEST</button>
    </ion-footer>
</ion-content>`,
  encapsulation: ViewEncapsulation.None
})
export class RequestDetailPage {
  iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  sendToUserData;
  remarks;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TransferPage", this.navParams.get("navParams"));
    this.sendToUserData = this.navParams.get("navParams");
  }

  onClickRequest() {

  }
}

