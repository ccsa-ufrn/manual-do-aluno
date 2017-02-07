import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Ufrn } from '../UFRN/ufrn';
import { Ccsa } from '../CCSA/ccsa';
import { Cursos } from '../Cursos/cursos';
import { CoordDepar } from '../CoordDepar/coorddepar';
import { VcParticipa } from '../VcParticipa/vcparticipa';
import { ConecteSe } from '../ConecteSe/conectese';
import { Mapa } from '../Mapa/mapa';
import { ComoChegar } from '../ComoChegar/como-chegar';
import { ParaConhecer } from '../ParaConhecer/para-conhecer';
import { ParaSaber } from '../ParaSaber/para-saber';
import { ParaFazer } from '../ParaFazer/para-fazer';

@Component({
  selector: 'main',
  templateUrl: 'main.html'
})
export class Main {

  constructor(public navCtrl: NavController) {

  }

  public goToPage(page:string) {
    switch(page) {
      case "ufrn":
        this.navCtrl.setRoot(Ufrn);
        break;
      case "ccsa":
        this.navCtrl.setRoot(Ccsa);
        break;
      case "cursos":
        this.navCtrl.setRoot(Cursos);
        break;
      case "coord-depar":
        this.navCtrl.setRoot(CoordDepar);
        break;
      case "vc-participa":
        this.navCtrl.setRoot(VcParticipa);
        break;
      case "conecte-se":
        this.navCtrl.setRoot(ConecteSe);
        break;
      case "mapa":
        this.navCtrl.setRoot(Mapa);
        break;
      case "como-chegar":
        this.navCtrl.setRoot(ComoChegar);
        break;
      case "para-conhecer":
        this.navCtrl.setRoot(ParaConhecer);
        break;
      case "para-voce-saber":
        this.navCtrl.setRoot(ParaSaber);
        break;
      case "coisas-para-fazer":
        this.navCtrl.setRoot(ParaFazer);
        break;
    }
  }

}
