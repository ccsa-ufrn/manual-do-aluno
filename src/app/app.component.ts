import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Ufrn } from '../pages/UFRN/ufrn';
import { Ccsa } from '../pages/CCSA/ccsa';
import { Main } from '../pages/Main/main';
import { Cursos } from '../pages/Cursos/cursos';
import { CoordDepar } from '../pages/CoordDepar/coorddepar';
import { VcParticipa } from '../pages/VcParticipa/vcparticipa';
import { ConecteSe } from '../pages/ConecteSe/conectese';
import { Mapa } from '../pages/Mapa/mapa';
import { ComoChegar } from '../pages/ComoChegar/como-chegar';
import { ParaSaber } from '../pages/ParaSaber/para-saber';
import { ParaConhecer } from '../pages/ParaConhecer/para-conhecer';
import { SitesEAplicativos } from '../pages/SitesEAplicativos/sites-e-aplicativos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Main;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicial', component: Main},
      { title: 'UFRN', component: Ufrn},
      { title: 'CCSA', component: Ccsa},
      { title: 'Cursos', component: Cursos},
      { title: 'Coordenação e Departamento', component: CoordDepar},
      { title: 'Você Participa!', component: VcParticipa},
      { title: 'Contecte-se!', component: ConecteSe},
      { title: 'O que tem no CCSA?', component: Mapa},
      { title: 'Como Chegar?', component: ComoChegar},
      { title: 'Para Você Saber!', component: ParaSaber},
      { title: 'Para Você Conhecer!', component: ParaConhecer},
      { title: 'Sites E Aplicativos Utéis!', component: SitesEAplicativos}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
