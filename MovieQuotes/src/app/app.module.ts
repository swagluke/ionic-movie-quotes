import { ListPageModule } from './../pages/list-page/list-page.module';
import { QuoteDetailPageModule } from './../pages/quote-detail-page/quote-detail-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCyaHYyNGJuV16zV1Xwy_4Mfd7pJYPIG-s",
  authDomain: "zhangl-movie-quotes-87cbc.firebaseapp.com",
  databaseURL: "https://zhangl-movie-quotes-87cbc.firebaseio.com",
  projectId: "zhangl-movie-quotes-87cbc",
  storageBucket: "zhangl-movie-quotes-87cbc.appspot.com",
  messagingSenderId: "205259789872"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    QuoteDetailPageModule,
    ListPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
