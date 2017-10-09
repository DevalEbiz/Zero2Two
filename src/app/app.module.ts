import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FilterPage } from '../pages/User/filter/filter';
import { HomePage } from '../pages/User/home/home';
import { ProductDetailPage } from '../pages/User/product-detail/product-detail';
import { CartPage } from '../pages/User/cart/cart';
import { WishlistPage } from '../pages/User/wishlist/wishlist';
import { MyAccountPage } from '../pages/User/my-account/my-account';
import { ContactPage } from '../pages/User/contact/contact';
import { AddressPage } from '../pages/User/address/address';
import { SignupPage } from '../pages/User/signup/signup';
import { TabsPage } from '../pages/User/tabs/tabs';
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */

}

@NgModule({
  declarations: [
    MyApp,
    FilterPage,
    ProductDetailPage,
    CartPage,
    WishlistPage,
    HomePage,
    MyAccountPage,
    ContactPage,
    AddressPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilterPage,
    ProductDetailPage,
    CartPage,
    WishlistPage,
    HomePage,
    MyAccountPage,
    ContactPage,
    AddressPage,
    SignupPage,
    TabsPage
  ],
  providers: [
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
