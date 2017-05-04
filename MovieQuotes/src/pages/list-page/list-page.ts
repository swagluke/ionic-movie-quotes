import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    private afDatabase: AngularFireDatabase,
    private alertCtrl: AlertController) {
    this.movieQuotesStream = this.afDatabase.list("/quotes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  addQuote(): void {
    const prompt = this.alertCtrl.create({
      title: "Add quote",
      inputs: [
        {
          name: "quote",
          placeholder: "Quote you like",
        },
        {
          name: "movie",
          placeholder: "Movie you like",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Add Quote",
          handler: (data: MovieQuote) => {
            console.log("TODO save: ", data);
            if(data.quote.length > 0 && data.movie.length > 0) {
              this.movieQuotesStream.push(data);
            } else {
              console.log("Invalid movie quote");
            }
          }
        },
      ],
    });
    prompt.present();
  }
}
