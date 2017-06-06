import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Cursos } from '../Cursos/cursos';
import { CoordDepar } from '../CoordDepar/coorddepar';

import { Main } from '../Main/main';

@Component({
  selector: 'ccsa',
  templateUrl: 'ccsa.html'
})
export class Ccsa {

  constructor(public navCtrl: NavController) {

  }

  public goToMain() {
      this.navCtrl.setRoot(Main);
  }

  public goToCourses() {
      this.navCtrl.setRoot(Cursos);
  }

  public goToCoordDepar() {
      this.navCtrl.setRoot(CoordDepar);
  }

}
