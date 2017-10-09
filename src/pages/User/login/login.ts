import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, MenuController } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { MainPage } from '../../pages';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

// Vendor Side
import { VendorLoginPage } from '../../Vendor/vendor-login/vendor-login';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: FormGroup;
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };
  isValid: any = false;
  // email: any;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public menu: MenuController) {
    // this.email = new FormControl('', [Validators.required]);
  }

  // Attempt to login in through our User service
  doLogin({ value, valid }) {
    this.navCtrl.push(TabsPage);
  }
  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  ngOnInit() {
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
  goToVendor() {
    this.navCtrl.push(VendorLoginPage);
  }
}
