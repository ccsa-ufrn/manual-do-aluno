import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Main } from '../Main/main';

@Component({
  selector: 'para-ajudar',
  templateUrl: 'para-ajudar.html'
})
export class ParaAjudar {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

}
