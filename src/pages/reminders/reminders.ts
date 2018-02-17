import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ViewEncapsulation } from "@angular/core";
import { URL_CONFIG } from "../../app/app.config";

/**
 * Generated class for the RemindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-reminders",
  templateUrl: "reminders.html",
  encapsulation: ViewEncapsulation.None
})

export class RemindersPage {
  iconPath = URL_CONFIG.ICON_ASSETS_PATH;
   remindersList: Array<any> = [];
   constructor(public navCtrl: NavController) {
   }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RemindersPage");
    this.remindersList = JSON.parse(localStorage.getItem('reminders'));
  }
  openNewRemindersPage() {
    this.navCtrl.push(AddNewRemindersPage);
  }
}

@Component({
  selector: "page-add-new-reminder",
  template: `<!--
  Generated template for the RemindersPage page.

  See http://ionicframework.com/docs/components/#navigation for more info on
  Ionic pages and navigation.
-->
<ion-header>

  <ion-navbar>
    <ion-title>Add New Reminders</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>
  <div class="block">
    <button class="add-btn" menuClose ion-item *ngIf="!dataSelected" (click)="onClickAddParticipant()">
      <i class="fa fa-user fa-icon"></i>
      <b>ADD RECIPIENT</b>
    </button>
    <div class="user-info" *ngIf="dataSelected">
    <i class="fa fa-icon-avatar" [ngClass]="participant?.icon"></i>
              <div class="name">
                <p>{{participant?.name}}</p>
                <p>{{participant?.data}}</p>
              </div>
               
               
            </div>
    
  </div>

  <div class="block">
    <i class="fa fa-inr fa-icon"></i>
    <input class="amt-input" type="number" placeholder="Enter Amount" [(ngModel)]="amount"/>
  </div>
  <div class="block">
    <p>Frequency</p>
    <div *ngFor="let f of frequency" class="chip" 
      [class.is-active]="f.isActive" (click)="onClickChip(f)">
      {{f.name}}
    </div>
  </div>
  <div class="block">

    <ion-item class="cal">
        <ion-label>Starts on</ion-label>
        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>
      </ion-item>
  </div>
  <div class="block">
    <textarea id="remarks" [(ngModel)]="remarks">Remarks (optional) </textarea>
  </div>
  <ion-footer>
         <button ion-button round (click)="onCickSave()">SAVE</button>
    </ion-footer>
</ion-content>`,
encapsulation: ViewEncapsulation.None
})
export class AddNewRemindersPage {
  participant;
  public frequency: Array<any> = [
    { name: "Daily", id: "daily" },
    { name: "Weekly", id: "weekly" },
    { name: "Monthly", id: "monthly" },
    { name: "Quaterly", id: "quaterly" },
    { name: "Half Yearly", id: "halfyearly" },
    { name: "Yearly", id: "yearly" }
  ];
  public event = {
    month: "1990-02-19",
    timeStarts: "07:43",
    timeEnds: "1990-02-20"
  };
  public freqSelected;
  public participants: Array<any> = [
    {id:'upi', name:'Rajkeshwar', data:'rajkeshwar@dbs', icon:'fa-address-book'},
    {id:'bank', name:'Upendra', data: 'XXXX XXXX 1508', icon:'fa-bank'},
    {id:'contact', name:'Prakash Gupta', data:'8886299905', icon:'fa-contact'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.frequency = this.frequency.map(t => {
      t.isActive = false;
      return t;
    });

    this.frequency[0].isActive = true;
  }
 
  dataSelected = false;
  amount;
  remarks;
  ionViewDidLoad() {
    console.log("ionViewDidLoad RemindersPage");
  }

  onClickAddParticipant() {
    let rNo = Math.floor(Math.random() * (2 - 0) + 0);
    this.participant = this.participants[rNo];
    this.dataSelected = true;
  }

  onClickChip( frequency ) {
    this.freqSelected = frequency;
    const index = this.frequency.indexOf(frequency);
    this.frequency.forEach(t => t.isActive = false);
    this.frequency[index].isActive = true;
  }

  onCickSave() {
    let reminder = {
      'reminder_id':new Date().getTime(),
      'reminder_data': {
        'freqSelected' : this.freqSelected,
        'amount': this.amount,
        'remarks':this.remarks,
        'participant':this.participant
      }
    };
    let reminders = []; 
    if(localStorage.getItem('reminders') != null)
      reminders = JSON.parse(localStorage.getItem('reminders'));
    
     reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));
    this.navCtrl.pop();
  }
}
