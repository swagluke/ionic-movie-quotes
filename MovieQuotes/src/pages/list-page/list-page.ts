import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieQuote } from "../../models/movie-quote.interface";

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html',
})
export class ListPage {

  public movieQuotesStream: FirebaseListObservable<MovieQuote[]>;
  
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   private afDatabase: AngularFireDatabase) {
     this.movieQuotesStream = this.afDatabase.list("/quotes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
