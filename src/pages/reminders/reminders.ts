import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { ReminderDetailPage } from "../reminder-detail/reminder-detail";

/**
 * Generated class for the RemindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-reminders",
  templateUrl: "reminders.html"
})

export class RemindersPage {
  iconPath = URL_CONFIG.ICON_ASSETS_PATH;
   remindersList: Array<any> = [];
   constructor(public navCtrl: NavController) {
   }

  ionViewDidLoad() {
    this.remindersList = JSON.parse(localStorage.getItem('reminders'));
  }

  ionViewWillEnter() {
    this.remindersList = JSON.parse(localStorage.getItem('reminders'));  
  }

  openNewRemindersPage() {
    this.navCtrl.push(ReminderDetailPage);
  }

  removeReminder(r?) {
    const index = this.remindersList.indexOf(r);
    this.remindersList.splice(index, 1);
    localStorage.setItem('reminders', JSON.stringify(this.remindersList));
  }
}
