import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Ccsa } from '../CCSA/ccsa';

@Component({
  selector: 'coord-depar',
  templateUrl: 'coorddepar.html'
})
export class CoordDepar {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Ccsa);
  }

}
