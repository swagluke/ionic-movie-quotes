import { ReversePipe } from './../../pipes/reverse-pipe';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list-page';

@NgModule({
  declarations: [
    ListPage,
    ReversePipe,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {}
