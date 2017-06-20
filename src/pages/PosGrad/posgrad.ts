import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Ccsa } from '../CCSA/ccsa';

@Component({
  selector: 'pos-grad',
  templateUrl: 'posgrad.html'
})
export class PosGrad {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Ccsa);
  }

}
