import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Main } from '../Main/main';

@Component({
  selector: 'ufrn',
  templateUrl: 'ufrn.html'
})
export class Ufrn {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }
}
