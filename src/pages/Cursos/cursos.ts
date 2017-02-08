import { Component } from '@angular/core';

import { ModalController, NavParams, NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'cursos',
  templateUrl: 'cursos.html'
})
export class Cursos {
  courses: Array<{title: string, description: any}>;

  constructor(public navCtrl: NavController, public modCtrl: ModalController) {
    this.courses = [
      { title: 'Administração', description: 'Administração é a área responsável pel'+
      'o gerenciamento dos recursos humanos, materiais e financeiros de uma organiza'+
      'ção. O administrador é o profissional responsável pelo planejamento das estra'+
      'tégias e pelo gerenciamento do dia a dia de uma empresa. Ele ajuda a definir,'+
      ' a analisar e a cumprir as metas de organização. Trabalha em praticamente tod'+
      'os os departamentos, nos quais gere recursos financeiros, materiais, humanos '+
      'e mercadológicos.'},
      { title: 'Biblioteconomia', description: 'Área responsável pela classificação,'+
      ' organização, conservação e divulgação da informação em diferentes suportes e'+
      ' organizações, não se limitando a bibliotecas. O bibliotecário trabalha como '+
      'um gestor de recursos informacionais, que também processa e dissemina a infor'+
      'mação. Além de catalogar e guardar as informações, ele orienta sua busca, sel'+
      'eção e uso.'},
      { title: 'Ciências Contábeis', description: 'Ciências contábeis é a área que c'+
      'uida das contas de uma empresa, por meio do registro e do controle das receit'+
      'as, despesas e dos lucros. O contador planeja, coordena e controla os registr'+
      'os negociais (compras, vendas, investimentos e aplicações) de uma empresa, pe'+
      'rmitindo que se tenha uma visão precisa do patrimônio, em suas nuances econôm'+
      'ico-financeiro, ambiental e tecnológico, bem como garantir a continuidade e c'+
      'rescimento progressivo e disciplinado dentro da legalidade e da ética exigida'+
      ' de um empreendimento atual e global.'},
      { title: 'Direito', description: 'A ciência do Direito é um ramo das ciências '+
      'sociais que estuda as normas obrigatórias que controlam as relações dos indiv'+
      'íduos em uma sociedade. É uma disciplina que transmite aos estudantes de dire'+
      'ito um conjunto de conhecimentos relacionados com as normas jurídicas determi'+
      'nadas por cada país. É um sinal de organização de uma determinada sociedade p'+
      'orque indica a recepção de valores e aponta para a dignidade do ser humano.'},
      { title: 'Economia', description: 'Economia é o conjunto de atividades desenvo'+
      'lvidas pelos homens visando a produção, distribuição e o consumo de bens e se'+
      'rviços necessários à sobrevivência e à qualidade de vida. A Ciência Econômica'+
      ' é uma ciência social, que estuda o funcionamento da Economia Capitalista, so'+
      'b o pressuposto do comportamento racional do homem econômico, ou seja, busca '+
      'da alocação eficiente dos recursos escassos entre inúmeros fins alternativos '+
      'em permanente expansão.'},
      { title: 'Serviço Social', description: 'Serviço Social é uma profissão de nív'+
      'el superior e é exercida somente por Assistente Social que possui inscrição n'+
      'o Conselho Regional de Serviço Social (CRESS). São diversos os espaços ocupac'+
      'ionais em que pode atuar o Assistente Social nos processos de elaboração, for'+
      'mulação, execução e avaliação de políticas sociais. Atua na orientação a indi'+
      'víduos, grupos e famílias e na realização de estudos sociais, de modo que ess'+
      'es tenham acesso a bens e serviços públicos. Outras possibilidades de atuação'+
      ' do Assistente Social estão no planejamento, na organização e na administraçã'+
      'o de benefícios sociais; na assessoria de órgãos, empresas e movimentos socia'+
      'is; na docência e na realização de pesquisas e investigações científicas.'},
      { title: 'Turismo', description: 'Turismo é a área que cuida do planejamento, '+
      'da organização, da promoção e da divulgação de viagens, eventos e atividades '+
      'de lazer e negócios, além de poder atuar na Gestão Pública de Turismo. O prof'+
      'issional desta área ainda gerencia a organização de viagens, feiras, congress'+
      'os e exposições. Em agências, operadores e sites turísticos, comanda os traba'+
      'lhos de venda de passagens, reserva de hotéis e programação de passeios e exc'+
      'ursões.'}
    ];
  }

  openModal(c) {
    let modal = this.modCtrl.create(CourseModal, { title: c.title, description: c.description });
    modal.present();
  }
}

@Component({
  template: '<ion-header><ion-navbar><button ion-button (click)="dismiss()" class="modal-bt"><ion-icon name="arrow-back"></ion-icon></button><ion-title class="modal-ti">{{title}}</ion-title></ion-navbar></ion-header><ion-content style="text-align: justify;" padding>{{description}}</ion-content>',
  selector: 'cursos'
}) export class CourseModal {
  title: string;
  description: string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.title = params.get('title');
    this.description = params.get('description');
  }

  dismiss() {
    let data = {'foo':'bar'};
    this.viewCtrl.dismiss(data);
  }
}
