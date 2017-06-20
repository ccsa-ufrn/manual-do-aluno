import { Component } from '@angular/core';
// import { PhotoViewer } from '../../../plugins/com-sarriaroman-photoviewer/www/PhotoViewer';

import { NavController } from 'ionic-angular';

import { Main } from '../Main/main';

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class Mapa {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

}
