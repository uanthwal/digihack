import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionSummaryService } from '../../service/transaction-summary-service';
/**
 * Generated class for the ChatBotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat-bot',
  templateUrl: 'chat-bot.html',
})
export class ChatBotPage {

  public chatData: any[] = [];
  public chatHistory: any = [];
  public askQuery: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public tsService: TransactionSummaryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatBotPage');
    this.tsService.fetchAllChat().subscribe(response => {
      this.chatData = response;
    });
  }

  public submitQuery() {
    if(this.askQuery) {
  let result;
    let query = {
      a: '',
      at: null,
      q: this.askQuery,
      qt: new Date()
    };
    
    let ask = this.askQuery;
    this.askQuery = '';
    this.chatHistory.push(query);
    setTimeout(() => {
          result = this.chatData.find(data => data.tag.search(new RegExp(ask, "i")) !== -1);
          query.a = result ? result.a : 'Sorry query not found \n please contact our customer care';
          query.at = new Date();
          this.chatHistory.pop();
          this.chatHistory.push(query);
    }, 1000);    
    
  }
  }

}
