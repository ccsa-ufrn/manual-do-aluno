import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Ufrn } from '../pages/UFRN/ufrn';
import { Ccsa } from '../pages/CCSA/ccsa';
import { Main } from '../pages/Main/main';
import { Cursos } from '../pages/Cursos/cursos';
import { CourseModal } from '../pages/Cursos/cursos';
import { CoordDepar } from '../pages/CoordDepar/coorddepar';
import { VcParticipa } from '../pages/VcParticipa/vcparticipa';
import { ConecteSe } from '../pages/ConecteSe/conectese';
import { Mapa } from '../pages/Mapa/mapa';
import { ComoChegar } from '../pages/ComoChegar/como-chegar';
import { ParaConhecer } from '../pages/ParaConhecer/para-conhecer';
import { ParaSaber } from '../pages/ParaSaber/para-saber';
import { ParaFazer } from '../pages/ParaFazer/para-fazer';

@NgModule({
  declarations: [
    MyApp,
    Ufrn,
    Ccsa,
    Main,
    Cursos,
    CourseModal,
    CoordDepar,
    VcParticipa,
    ConecteSe,
    Mapa,
    ComoChegar,
    ParaConhecer,
    ParaSaber,
    ParaFazer
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    VcParticipa,
    ConecteSe,
    Mapa,
    ComoChegar,
    ParaConhecer,
    ParaSaber,
    ParaFazer
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
