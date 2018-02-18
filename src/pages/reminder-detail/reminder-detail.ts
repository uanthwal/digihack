import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";

@Component({
  selector: "page-reminder-detail",
  templateUrl: "reminder-detail.html"
})
export class ReminderDetailPage {
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
    {
      id: "upi",
      name: "Rajkeshwar",
      data: "rajkeshwar@dbs",
      icon: "fa-address-book"
    },
    { id: "bank", name: "Upendra", data: "XXXX XXXX 1508", icon: "fa-bank" },
    {
      id: "contact",
      name: "Prakash Gupta",
      data: "8886299905",
      icon: "fa-contact"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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

  onClickChip(freq) {
    this.freqSelected = freq;
    const index = this.frequency.indexOf(freq);
    this.frequency.forEach(t => t.isActive = false);
    this.frequency[index].isActive = true;
  }

  onCickSave() {
    let reminder = {
      reminder_id: new Date().getTime(),
      reminder_data: {
        freqSelected: this.freqSelected,
        amount: this.amount,
        remarks: this.remarks,
        participant: this.participant
      }
    };
    let reminders = [];
    if (localStorage.getItem("reminders") != null)
      reminders = JSON.parse(localStorage.getItem("reminders"));

    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));
    this.navCtrl.pop();
  }
}
