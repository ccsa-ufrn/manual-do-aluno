import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Main } from '../Main/main';

@Component({
  selector: 'sites-e-aplicativos',
  templateUrl: 'sites-e-aplicativos.html'
})
export class SitesEAplicativos {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

}
