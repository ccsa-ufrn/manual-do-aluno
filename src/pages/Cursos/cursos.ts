import { Component } from '@angular/core';

import { ModalController, NavParams, NavController, ViewController } from 'ionic-angular';

import { Ccsa } from '../CCSA/ccsa';

@Component({
  selector: 'cursos',
  templateUrl: 'cursos.html'
})
export class Cursos {
  courses: Array<{title: string, description: any}>;

  constructor(public navCtrl: NavController, public modCtrl: ModalController) {
    this.courses = [
      { title: 'Administração', description: 'Administração é a área responsável pelo '+
      'gerenciamento dos recursos humanos, materiais e financeiros de uma organização.'+
      'O administrador é o profissional responsável pelo planejamento das estratégias '+
      'e pelo gerenciamento do dia a dia de uma empresa. Ele ajuda a definir, a analis'+
      'ar e a cumprir as metas da organização. Trabalha em praticamente todos os depar'+
      'tamentos, nos quais gere recursos financeiros, materiais, humanos e mercadológi'+
      'cos. Conduz as relações entre a empresa e os empregados, participando dos proce'+
      'ssos de seleção, admissão e demissão de funcionários, e do relacionamento com o'+
      's sindicatos de cada categoria. Implementa planos de carreira e programas de be'+
      'nefícios. Coordena, ainda, os recursos materiais da companhia, controlando a co'+
      'mpra e a estocagem de matérias-primas e produtos finais. No setor financeiro, c'+
      'uida de orçamentos e fluxo de caixa. Também se envolve com a publicidade e o ma'+
      'rketing, na promoção de vendas dos produtos ou serviços.'},
      { title: 'Biblioteconomia', description: 'Ciência da informação a área responsáv'+
      'el pela classificação, organização, conservação e divulgação do acervo de bibli'+
      'otecas e centros de documentação. O bibliotecário trabalha como um administrado'+
      'r de dados, que também processa e dissemina a informação. Além de catalogar e g'+
      'uardar as informações, ele orienta sua busca e seleção. Cabe-lhe analisar, sint'+
      'etizar e organizar livros, revistas, documentos, fotos, filmes e vídeos. É de s'+
      'ua responsabilidade planejar, implementar e gerenciar sistemas de informação, a'+
      'lém de preservar os suportes (mídias) para que resistam ao tempo e ao uso. Trab'+
      'alha em bibliotecas públicas, escolares ou particulares, centros de documentaçã'+
      'o, arquivos, museus, centros culturais e de memória, hemerotecas, editoras, emp'+
      'resas de comunicação, provedores de internet, ONGs, clubes e associações. Nos ú'+
      'ltimos tempos, a atuação do profissional de biblioteconomia tem se voltado cada'+
      ' vez mais para a criação e a manutenção de arquivos digitais e para a montagem '+
      'de bancos de dados em computadores, empregando para isso os sistemas de informá'+
      'tica e a internet. O licenciado está apto a dar aulas no ensino técnico para fo'+
      'rmar bibliotecários.'},
      { title: 'Ciências Contábeis', description: 'Ciências contábeis é a área que cui'+
      'da das contas de uma empresa, por meio do registro e do controle das receitas, '+
      'das despesas e dos lucros. O contador planeja, coordena e controla os registros'+
      ' negociais (compras, vendas, investimentos e aplicações) de uma empresa, permit'+
      'indo que se tenha uma visão precisa do patrimônio. Ele interpreta eventos econô'+
      'micos e fornece informações aos dirigentes da companhia para que tomem decisões '+
      'sobre a direção do negócio. Orienta, mostra e indica os pontos de atenção, como'+
      ' o volume de despesas acima da média. Registra os fatos e atos administrativos '+
      'e responsabilizasse pelo pagamento de tributos. Também pode ajudar a traçar pla'+
      'nos de investimento. Algumas atividades são exclusivas desse profissional: a au'+
      'ditoria e as perícias contábeis. Para trabalhar como contabilista, é preciso se'+
      'r registrado no Conselho Regional de Contabilidade. Tornou-se obrigatório, desd'+
      'e 2010, realizar um exame de suficiência para obter o registro profissional.'},
      { title: 'Ciências Econômicas', description: 'Ciências econômicas é o estudo da '+
      'produção e da distribuição de bens e serviços entre os indivíduos e as sociedad'+
      'es. O aluno de economia estuda os fenômenos relacionados com a produção e o con'+
      'sumo de bens e serviços que envolvam ou não dinheiro. O Economista ajuda a cons'+
      'truir, a ampliar e a preservar o patrimônio de pessoas, empresas e governos. De'+
      'senvolve planos para a solução de problemas financeiros, econômicos e administr'+
      'ativos nos diversos setores de atividade – comércio, serviços, indústria ou fin'+
      'anças. Esse profissional se dedica tanto a grandes questões, referentes a um pa'+
      'ís ou a uma região, quanto a problemas de pequenas empresas ou investidores in'+
      'dividuais. Graças a essa versatilidade, encontra trabalho em entidades privadas'+
      ', institutos e órgãos municipais, estaduais e federais. Pode atuar, ainda, como'+
      ' consultor autônomo.'},
      { title: 'Direito', description: 'Direito é a ciência que cuida da aplicação das'+
      ' normas jurídicas vigentes em um país, para organizar as relações entre indivíd'+
      'uos e grupos na sociedade, assim como as relações entre indivíduos e grupos pri'+
      'vados com o Estado. Zelar pela harmonia e pela correção das relações entre os c'+
      'idadãos, as empresas e o poder público é a função do bacharel em direito. Para '+
      'isso, ele analisa as disputas e os conflitos com base no que está estabelecido '+
      'na Constituição e regulamentado pelas leis, defendendo os interesses do cliente'+
      ' em diversos campos. Resolve litígios que envolvem todos os tipos de relações s'+
      'ociais, desde conflitos entre pessoas privadas, passando por empregados e empre'+
      'gadores, até disputas entre entes públicos. Há várias carreiras distintas para '+
      'esse bacharel: ele pode, na iniciativa privada, atuar como advogado, prestando '+
      'serviços de consultoria/assessoria ou assistência judiciária/contencioso; ou, a'+
      'inda, seguir uma das diversas carreiras jurídicas da iniciativa pública, trabal'+
      'hando como juiz, promotor ou procurador de diversas entidades públicas. Para se'+
      'r advogado é preciso passar no Exame de Ordem, exigido pela OAB para a prática '+
      'da advocacia, privada ou pública.'},
      { title: 'Serviço Social', description: 'O Assistente Social, profissional de ní'+
      'vel superior formado pelo curso só pode exercer suas atividades profissionais s'+
      'e possuir inscrição no Conselho Regional de Serviço Social (CRESS). São diverso'+
      's os espaços ocupacionais em que pode ele pode atuar: elaboração, formulação, e'+
      'xecução e avaliação de processos de políticas sociais; orientação a indivíduos,'+
      ' grupos e famílias de forma que eles tenham acesso a bens e serviços públicos. '+
      'Outras possiblidades de atuação do Assistente Social estão no planejamento, na '+
      'organização e na administração de benefícios sociais; na assessoria a órgãos, e'+
      'mpresas e movimentos sociais; na docência e na realização de pesquisas e invest'+
      'igações científicas.'},
      { title: 'Turismo', description: 'Turismo é a área que cuida do planejamento, da'+
      ' organização, da promoção e da divulgação de viagens, eventos e atividades de l'+
      'azer e negócios. O profissional desta área ainda gerencia a organização de viag'+
      'ens, feiras, congressos e exposições. Em agências, operadoras e sites turístico'+
      's, comanda os trabalhos de venda de passagens, reserva de hotéis e programação '+
      'de passeios e excursões. Além disso, gerencia atividades em hotéis, empresas de'+
      ' transporte ou de eventos e em empreendimentos de lazer, como parques temáticos'+
      ', e acompanha grupos de turistas. Em prefeituras e órgãos públicos, coordena a '+
      'exploração turística de uma região, promovendo e divulgando as atrações locais.'}
    ];
  }

  openModal(c) {
    let modal = this.modCtrl.create(CourseModal, { title: c.title, description: c.description });
    modal.present();
  }

  public goToMain() {
      this.navCtrl.setRoot(Ccsa);
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
