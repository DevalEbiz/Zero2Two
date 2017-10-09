import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'landing.html',

})
export class LandingPage {
  selCountry: any;
  selArea: any;
  country = [];
  area = [];
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.dir = platform.dir();
    this.country.push({ id: "ind", title: "India" }, { id: "can", title: "Canada" }, { id: "usa", title: "United States of America" }, { id: "chin", title: "China" }, { id: "rus", title: "Russia" });
    // this.area.push({ pin: "362001", addr: "abcd efghij" }, { pin: "328005", addr: "xyz qwerty" }, { pin: "368011", addr: "pqr asdf" });
  }

  startApp() {
    // this.navCtrl.setRoot('WelcomePage', {}, {
    //   animate: true,
    //   direction: 'forward'
    // });
  }
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
  onChange() {
    console.log(this.selCountry);
    this.area.push({ pin: "362001", addr: "abcd efghij" }, { pin: "328005", addr: "xyz qwerty" }, { pin: "368011", addr: "pqr asdf" }, { pin: "385001", addr: "mno zyyxx" });
  }
  onChange2() {
    console.log(this.selArea);
    this.navCtrl.setRoot('LoginPage');
  }

}
