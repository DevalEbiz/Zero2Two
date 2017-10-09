import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, MenuController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  register: FormGroup;

  account = {
    name: "",
    email: "",
    password: "",
    phone: "",
    country: []
  };
  showPwd: true;
  selCountry: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.account.country.push({ id: "ind", title: "India" }, { id: "can", title: "Canada" }, { id: "usa", title: "United States of America" }, { id: "chin", title: "China" }, { id: "rus", title: "Russia" });
  }
  onCountrySel() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ngOnInit() {
    this.register = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      showPwd: new FormControl('', [Validators.required]),
      mob: new FormControl('', [Validators.required, Validators.maxLength(10)])

    })
  }
  doSignup() {
    this.navCtrl.pop();
  }
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
