import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URL_CONFIG } from '../../app/app.config';
import { RequestDetailPage } from './request-detail';

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



