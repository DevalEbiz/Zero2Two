import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilterPage } from '../filter/filter';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  ads = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ads.push("../../assets/img/ads/0.jpg");
    this.ads.push("../../assets/img/ads/1.jpg");
    this.ads.push("../../assets/img/ads/2.jpg");
    this.ads.push("../../assets/img/ads/3.jpg");
    this.ads.push("../../assets/img/ads/4.jpg");
    this.ads.push("../../assets/img/ads/5.jpg");
    this.ads.push("../../assets/img/ads/6.jpg");
    this.ads.push("../../assets/img/ads/7.jpg");
    this.ads.push("../../assets/img/ads/8.jpg");
    this.ads.push("../../assets/img/ads/9.jpg");
    this.ads.push("../../assets/img/ads/10.jpg");
    this.ads.push("../../assets/img/ads/11.jpg");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToFilter() {
    this.navCtrl.push(FilterPage, {});
  }

}
