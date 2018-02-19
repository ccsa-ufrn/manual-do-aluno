import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Ufrn } from '../pages/UFRN/ufrn';
import { Ccsa } from '../pages/CCSA/ccsa';
import { Main } from '../pages/Main/main';
import { Cursos } from '../pages/Cursos/cursos';
import { CourseModal } from '../pages/Cursos/cursos';
import { CoordDepar } from '../pages/CoordDepar/coorddepar';
import { PosGrad } from '../pages/PosGrad/posgrad';
import { VcParticipa } from '../pages/VcParticipa/vcparticipa';
import { ConecteSe } from '../pages/ConecteSe/conectese';
import { Mapa } from '../pages/Mapa/mapa';
import { ComoChegar } from '../pages/ComoChegar/como-chegar';
import { ParaSaber } from '../pages/ParaSaber/para-saber';
import { ParaAjudar } from '../pages/ParaAjudar/para-ajudar';
import { ParaConhecer } from '../pages/ParaConhecer/para-conhecer';
import { SitesEAplicativos } from '../pages/SitesEAplicativos/sites-e-aplicativos';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '30782dea'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Ufrn,
    Ccsa,
    Main,
    Cursos,
    CourseModal,
    CoordDepar,
    PosGrad,
    VcParticipa,
    ConecteSe,
    Mapa,
    ComoChegar,
    ParaSaber,
    ParaAjudar,
    ParaConhecer,
    SitesEAplicativos,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Ufrn,
    Ccsa,
    Main,
    Cursos,
    CourseModal,
    CoordDepar,
    PosGrad,
    VcParticipa,
    ConecteSe,
    Mapa,
    ComoChegar,
    ParaSaber,
    ParaAjudar,
    ParaConhecer,
    SitesEAplicativos
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, InAppBrowser, Network]
})
export class AppModule {}
