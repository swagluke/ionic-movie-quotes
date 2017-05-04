import { QuoteDetailPage } from './../quote-detail-page/quote-detail-page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  examplePush() {
    console.log("TODO: Push a new page");
    this.navCtrl.push(QuoteDetailPage);
  }
}
