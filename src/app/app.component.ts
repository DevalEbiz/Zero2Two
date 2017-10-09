import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { MyAccountPage } from '../pages/User/my-account/my-account';
import { ContactPage } from '../pages/User/contact/contact';
import { SignupPage } from '../pages/User/signup/signup';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Contact Us', component: 'ContactPage' },
    { title: 'My Order', component: '' },
    { title: 'Share With Friends', component: '' },
    { title: 'Rate Us', component: '' },
    { title: 'Marketing', component: '' }
  ]

  constructor(private platform: Platform, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
  }

  openPage(page) {
    // if (page.component !== '')
    // this.nav.setRoot(page.component);
  }
  goToLogin() {
    this.nav.setRoot('LoginPage');
  }
  goToSignup() {
    this.nav.push(SignupPage);
  }
}
