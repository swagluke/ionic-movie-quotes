import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieQuote } from "../../models/movie-quote.interface";
import { Subscription } from "rxjs/Subscription";

/**
 * Generated class for the QuoteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quote-detail-page',
  templateUrl: 'quote-detail-page.html',
})
export class QuoteDetailPage implements OnInit, OnDestroy {
  public movieQuote: MovieQuote;
  public movieQuoteStream: FirebaseObjectObservable<MovieQuote>;
  private movieQuoteStreamSubscription: Subscription;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteDetailPage');
  }

  ngOnInit(): void {
    const movieQuoteKey = this.navParams.get("key");
    this.movieQuoteStream = this.afDatabase.object(`/quotes/${movieQuoteKey}`);
    this.movieQuoteStreamSubscription = this.movieQuoteStream.subscribe((movieQuote: MovieQuote) => {
      this.movieQuote = movieQuote;
      // console.log("Got", this.movieQuote);
    })

  }
  ngOnDestroy(): void {
    this.movieQuoteStreamSubscription.unsubscribe();
  }
}
