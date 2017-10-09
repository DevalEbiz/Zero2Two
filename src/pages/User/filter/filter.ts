import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  categories;
  options: [{ name: any, count: any, selected: boolean, hidden: boolean }] = [{ name: "", count: 0, selected: false, hidden: false }];
  option1; option2; option3; option4; option5;
  searchQuery: string = '';
  filterQuery = [];
  selTab = 0;
  colorStyle = "";
  preSelFilter = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (window.localStorage._appliedFilter !== undefined) {
      this.preSelFilter = JSON.parse(window.localStorage._appliedFilter);
    }

    this.categories = ["Category", "Brand", "Color", "Price", "Gender"];
    this.option1 = [{ name: "Dress", count: 1240, selected: false, hidden: false }, { name: "T-shirt", count: 500, selected: false, hidden: false }, { name: "Shirt", count: 419, selected: false, hidden: false }, { name: "Bottom", count: 150, selected: false, hidden: false }, { name: "Jeans", count: 650, selected: false, hidden: false }];
    this.option2 = [{ name: "Lee", count: 1040, selected: false, hidden: false }, { name: "Flying Dragon", count: 1600, selected: false, hidden: false }, { name: "Puma", count: 500, selected: false, hidden: false }, { name: "Lady Shop", count: 420, selected: false, hidden: false }, { name: "Peter", count: 650, selected: false, hidden: false }];
    this.option3 = [{ name: "Red", count: 2240, selected: false, hidden: false }, { name: "Green", count: 1950, selected: false, hidden: false }, { name: "White", count: 2600, selected: false, hidden: false }, { name: "Cream", count: 960, selected: false, hidden: false }, { name: "Pink", count: 1540, selected: false, hidden: false }, { name: "Grey", count: 1260, selected: false }];
    this.option4 = [{ name: "<1500", count: 540, selected: false }, { name: "2000 to 4000", count: 2100, selected: false }, { name: "5000 to 7000", count: 1520, selected: false }, { name: ">7000", count: 500, selected: false }];
    this.option5 = [{ name: "Male", count: 12000, selected: false }, { name: "Female", count: 15000, selected: false, hidden: false }];


    // setting Category as default selected
    this.options = this.option1;
  }

  ionViewDidLoad() {

  }
  populateOpt(filter, selTab) {

    this.selTab = selTab;
    switch (filter) {
      case this.categories[0]:
        this.options = this.option1;
        break;
      case this.categories[1]:
        this.options = this.option2;
        break;
      case this.categories[2]:
        this.options = this.option3;
        break;
      case this.categories[3]:
        this.options = this.option4;
        break;
      case this.categories[4]:
        this.options = this.option5;
        break;
      default:
        break;
    }
  }
  getItems(event) {
    var nameList = [];
    for (let i = 0; i < this.options.length; i++) {
      nameList.push(this.options[i].name);
    }

    let val = event.target.value;

    var temp = this.options;
    // console.log(this.options, temp);
    if (val && val.trim() != '') {
      nameList = nameList.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      console.log(nameList);

    } else {
      for (let i = 0; i < this.options.length; i++) {
        this.options[i].hidden = false;
      }
    }
  }
  toggleOpt(i) {
    // console.log(this.options[i].name, this.options[i].selected);
    if (this.options[i].selected) {
      this.filterQuery.push(this.options[i].name);
    } else {
      for (let i = 0; i < this.filterQuery.length; i++) {
        if (this.filterQuery[i] == this.options[i].name) {
          this.filterQuery.splice(i, 1);
        }
      }
    }

    if (this.selTab == 0) {
      this.option1[i].selected = this.options[i].selected;
    }
    else if (this.selTab == 1) {
      this.option2[i].selected = this.options[i].selected;
    }
    else if (this.selTab == 2) {
      this.option3[i].selected = this.options[i].selected;
    } else if (this.selTab == 3) {
      this.option4[i].selected = this.options[i].selected;
    } else {
      this.option5[i].selected = this.options[i].selected;
    }
  }
  applyFilter() {
    if (this.filterQuery.length) {
      window.localStorage._appliedFilter = JSON.stringify(this.filterQuery);

      this.navCtrl.push(HomePage);
    }
    else
      console.log("You haven't applied any filter");

  }
}
