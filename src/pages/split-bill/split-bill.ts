import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SplitBillDetailPage } from './split-bill-detail';

/**
 * Generated class for the SplitBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-split-bill',
  templateUrl: 'split-bill.html',
})
export class SplitBillPage {
  billmode = "upi_id";
  UPIList = [
    {
      initials: "UA",
      name: "Upendra Anthwal",
      upi_add: "upendra@dbs",
      type: "upi_id",
      isSelected: false
    },
    {
      initials: "RP",
      name: "Rajkeshwar Prasad",
      upi_add: "rajkeshwar@dbs",
      type: "upi_id",
      isSelected: false
    },
    {
      initials: "PG",
      name: "Prakash Gupta",
      upi_add: "prakash@paytm",
      type: "upi_id",
      isSelected: false
    },
    {
      initials: "HK",
      name: "Himanshu Kesarwani",
      upi_add: "himan@icici",
      type: "upi_id",
      isSelected: false
    },
    {
      initials: "VD",
      name: "Venkat Dongala",
      upi_add: "venkat@ybl",
      type: "upi_id",
      isSelected: false
    },
    { initials: "JS", name: "Jay Shah", upi_add: "jay@icici", type: "upi_id" },
    {
      initials: "RS",
      name: "Rahul Singh",
      upi_add: "rahul@upi",
      type: "upi_id",
      isSelected: false
    },
    {
      initials: "VS",
      name: "Varun Sharma",
      upi_add: "varun@dbs",
      type: "upi_id",
      isSelected: false
    }
  ];
  contactList = [
    {
      initials: "RP",
      name: "Rajkeshwar Prasad",
      contact_number: "7004567894",
      type: "contact",
      isSelected: false
    },
    {
      initials: "UA",
      name: "Upendra Anthwal",
      contact_number: "8886389997",
      type: "contact",
      isSelected: false
    },
    {
      initials: "PG",
      name: "Prakash Gupta",
      contact_number: "8886299905",
      type: "contact",
      isSelected: false
    },
    {
      initials: "HK",
      name: "Himanshu Kesarwani",
      contact_number: "9789568914",
      type: "contact",
      isSelected: false
    },
    {
      initials: "JS",
      name: "Jay Shah",
      contact_number: "901288730",
      type: "contact",
      isSelected: false
    },
    {
      initials: "RS",
      name: "Rahul Singh",
      contact_number: "9627517697",
      type: "contact",
      isSelected: false
    },
    {
      initials: "VD",
      name: "Venkat Dongala",
      contact_number: "9675258965",
      type: "contact",
      isSelected: false
    },
    {
      initials: "VS",
      name: "Varun Sharma",
      contact_number: "9675000245",
      type: "contact",
      isSelected: false
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UPIList = this.UPIList.map((ul: any) => {
      ul.icon = 'avtr--' + Math.floor(Math.random() * 215);
      return ul;
    });
    this.contactList = this.contactList.map((ul: any) => {
      ul.icon = 'avtr--' + Math.floor(Math.random() * 215);
      return ul;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitBillPage');
  }

  onClickCard(c) {
    if(this.billmode == "upi_id") {
      this.UPIList.forEach(item => {
        if(c.initials == item.initials) {
          item['isSelected'] = !item['isSelected'];
        }
      });
    } else  if(this.billmode == "contact") {
      this.contactList.forEach(item => {
        if(c.initials == item.initials) {
          item['isSelected'] = !item['isSelected'];
        }
      });
    }
  }

  onClickProceedSplit() {
    let selectedBillers = [];
    if(this.billmode == "upi_id") {
      this.UPIList.forEach(item => {
        if(item['isSelected']) {
          selectedBillers.push(item);
        }
      });
    } else  if(this.billmode == "contact") {
      this.contactList.forEach(item => {
        if(item['isSelected']) {
          selectedBillers.push(item);
        }
      });
    }
    this.navCtrl.push(SplitBillDetailPage,{data:selectedBillers})
  }
}
